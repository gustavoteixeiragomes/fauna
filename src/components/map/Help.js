import React from 'react'

var SearchIcon = require('../../images/searchicon.svg');
var FilterIcon = require('../../images/filter.svg');
var DistanceIcon = require('../../images/distance.svg');
var DateIcon = require('../../images/date.svg');
var CaptiveIcon = require('../../images/captivity.svg');
var PinIcon = require('../../images/pin.svg');


const Header = () => (
    <div className='help-box'>
      <h2>Help</h2>
      <div className='row row1'>
        <div className='help-image'>
          <img src={SearchIcon} alt="Search Icon"/>
        </div>
        <div className='help-description'>
          <p>Click Search button to open search</p>
        </div>
      </div>

      <div className='row row2'>
        <div className='help-image'>
          <img src={FilterIcon} alt="Filter Icon"/></div>
        <div className='help-description'>
          <p>Click Filters button to open filter menu</p>
          <ul>
            <li>
              <div className='help-filter-image'>
                <img src={DistanceIcon} alt="Distance Icon"/>
              </div>
              <div className='help-filter-description'>
                <p>Distance</p>
              </div>
            </li>
            <li>
              <div className='help-filter-image'>
                <img src={DateIcon} alt="Date Icon"/>
              </div>
              <div className='help-filter-description'>
                <p>Date</p>
              </div>
            </li>
            <li>
              <div className='help-filter-image'>
                <img src={CaptiveIcon} alt="Captivity Icon"/>
              </div>
              <div className='help-filter-description'>
                <p>Captivity</p>
              </div>
            </li>
          </ul>

        </div>

      </div>

      <div className='row row3'>
        <div className='help-image'>
          <img src={PinIcon} alt="Pin Icon"/>
        </div>
        <div className='help-description'>
          <p>Click on a pin to learn more</p>
        </div>
      </div>
    </div>
)

export default Header
