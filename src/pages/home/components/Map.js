import React, { useState } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { scaleQuantile } from 'd3-scale';
import ReactTooltip from 'react-tooltip';
import PropTypes from 'prop-types';

const INDIA_TOPO_JSON = require('../data/india.topo.json');

const PROJECTION_CONFIG = {
  scale: 350,
  center: [78.9629, 22.5937], // Always in [East Longitude, North Latitude]
};

const COLOR_RANGE = [
  '#e5f8e2',
  '#c6f2c0',
  '#9feaa1',
  '#6fd380',
  '#4bbf5e',
  '#3a9c4b',
  '#2e8038',
  '#1f6428',
  '#15502b',
];

const DEFAULT_COLOR = '#EEE';

const getHeatMapData = () => {
  return [
    { id: 'TN', state: 'Tamil Nadu', value: 1.28 },
    { id: 'TS', state: 'Telangana', value: 1.07 },
    { id: 'MP', state: 'Madhya Pradesh', value: 10.95 },
    { id: 'HR', state: 'Haryana', value: 0.10 },
    { id: 'CT', state: 'Chhattisgarh', value: 2.73 },
    { id: 'MH', state: 'Maharashtra', value: 6.72 },
    { id: 'TR', state: 'Tripura', value: 5.13 },
    { id: 'KA', state: 'Karnataka', value: 1.17 },
    { id: 'KL', state: 'Kerala', value: 6.86 },
    { id: 'UP', state: 'Uttar Pradesh', value: 0.90 },
    { id: 'AS', state: 'Assam', value: 0.80 },
    { id: 'GJ', state: 'Gujarat', value: 5.87 },
    { id: 'OD', state: 'Odisha', value: 5.01 },
    { id: 'RJ', state: 'Rajasthan', value: 3.35 },
    { id: 'HP', state: 'Himachal Pradesh', value: 5.25 },
    { id: 'AP', state: 'Andhra Pradesh', value: 4.07 },
    { id: 'BR', state: 'Bihar', value: 1.05 },
    { id: 'GOA', state: 'Goa', value: 17.64 },
    { id: 'JH', state: 'Jharkhand', value: 5.98 },
    { id: 'PB', state: 'Punjab', value: 0.35 },
    { id: 'AR', state: 'Arunachal Pradesh', value: 5.79 },
    { id: 'MZ', state: 'Mizoram', value: 17.30 },
    { id: 'MN', state: 'Manipur', value: 4.04 },
    { id: 'NL', state: 'Nagaland', value: 3.88 },
    { id: 'SK', state: 'Sikkim', value: 100.00 },
    { id: 'ML', state: 'Meghalaya', value: 9.93 },
    { id: 'UK', state: 'Uttarakhand', value: 32.84 },
  ];
};

const geographyStyle = {
  default: {
    outline: 'none'
  },
  hover: {
    fill: '#ccc',
    transition: 'all 250ms',
    outline: 'none'
  },
  pressed: {
    outline: 'none'
  }
};

const LinearGradient = (props) => {
  const { data } = props;
  return (
    <div className="my-6 w-[70%] mx-auto text-center">
      <div className="flex justify-between text-sm mb-2">
        <span className='text-xl'>{data.min}</span>
        <span className="fill"></span>
        <span className='text-xl'>{data.max}</span>
      </div>
      <div
        style={{
          backgroundImage: `linear-gradient(to right, ${data.fromColor}, ${data.toColor})`,
          height: '40px',
        }}
        className="w-full rounded-lg"
      />
    </div>
  );
};

LinearGradient.propTypes = {
  data: PropTypes.object.isRequired,
};

const Map = () => {
  const [tooltipContent, setTooltipContent] = useState('');
  const [data, setData] = useState(getHeatMapData());

  const gradientData = {
    fromColor: COLOR_RANGE[0],
    toColor: COLOR_RANGE[COLOR_RANGE.length - 1],
    min: 0,
    max: data.reduce((max, item) => (item.value > max ? item.value : max), 0),
  };

  const colorScale = scaleQuantile()
    .domain(data.map((d) => d.value))
    .range(COLOR_RANGE);

    const onMouseEnter = (geo, current = { value: 'NA' }) => {
      return () => {
        setTooltipContent(`${geo.properties.name}: ${current.value}%`);
      };
    };
  
    const onMouseLeave = () => {
      setTooltipContent('');
    };

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-center text-3xl font-semibold mb-6">State-wise Organic Farming in India</h1>
      <div className="text-center mb-6">
        <p className="text-2xl text-gray-700">
          This heat map shows the percentage of land under organic farming across various states in India.
        </p>
        <p className="text-xl text-gray-600 mt-2">
          The values represent the area percentage of organic farming relative to the total cropped area (TCA) in each state.
        </p>
      </div>

      {/* Tooltip content is handled by ReactTooltip */}

      <ReactTooltip>{tooltipContent}</ReactTooltip>
        <ComposableMap
          projectionConfig={PROJECTION_CONFIG}
          projection="geoMercator"
          width={600}
          height={220}
          data-tip=""
        >
          <Geographies geography={INDIA_TOPO_JSON}>
            {({ geographies }) =>
              geographies.map(geo => {
                //console.log(geo.id);
                const current = data.find(s => s.id === geo.id);
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={current ? colorScale(current.value) : DEFAULT_COLOR}
                    style={geographyStyle}
                    onMouseEnter={onMouseEnter(geo, current)}
                    onMouseLeave={onMouseLeave}
                  />
                );
              })
            }
          </Geographies>
        </ComposableMap>

      <LinearGradient data={gradientData} />

      <div className="mt-12 text-center text-sm">
        <h2 className="text-xl font-semibold">Courtesy</h2>
        <p>
          The data used in this map is based on the report by the Ministry of Agriculture and Farmers Welfare, Government of India.
          For more information, please visit the{' '}
          <a
            href="https://sansad.in/getFile/annex/258/AU1937.pdf?source=pqars"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            official document
          </a>.
        </p>
      </div>
    </div>
  );
};

export default Map;
