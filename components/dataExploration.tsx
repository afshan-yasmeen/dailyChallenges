"use client"
import React from 'react'
import { useState } from 'react';
const countries = [
    {
      name: "Afghanistan",
      code: "AF",
      cities: [
        {
          name: "Kabul",
          code: "KB",
          districts: ["District 1", "District 2"]
        },
        {
          name: "Herat",
          code: "HR",
          districts: ["Herat District", "Guzara District"]
        },
        {
          name: "Mazar-i-Sharif",
          code: "MS",
          districts: ["Balkh District", "Dawlatabad District"]
        }
      ]
    },
    {
      name: "Pakistan",
      code: "PAK",
      cities: [
        {
          name: "Karachi",
          code: "KC",
          districts: ["South Karachi", "Central Karachi"]
        },
        {
          name: "Lahore",
          code: "LHR",
          districts: ["Gulberg", "Model Town"]
        },
        {
          name: "Islamabad",
          code: "IBD",
          districts: ["G-8", "F-10"]
        }
      ]
    },
    {
      name: "United States",
      code: "US",
      cities: [
        {
          name: "New York City",
          code: "NYC",
          districts: ["Manhattan", "Brooklyn"]
        },
        {
          name: "Los Angeles",
          code: "LA",
          districts: ["Hollywood", "Beverly Hills"]
        },
        {
          name: "Chicago",
          code: "CHI",
          districts: ["The Loop", "Lincoln Park"]
        }
      ]
    },
    {
      name: "United Kingdom",
      code: "UK",
      cities: [
        {
          name: "London",
          code: "LDN",
          districts: ["Westminster", "Camden"]
        },
        {
          name: "Manchester",
          code: "MAN",
          districts: ["City Centre", "Salford"]
        },
        {
          name: "Birmingham",
          code: "BIR",
          districts: ["City Centre", "Edgbaston"]
        }
      ]
    }
  ];
const DataExploration = () => {
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [selectedCity, setSelectedCity] = useState(null);
    const [selectedDistrict, setSelectedDistrict] = useState(null);
  
    const handleCountryChange = (event:any) => {
      setSelectedCountry(event.target.value);
    };
  
    const handleCityChange = (event:any) => {
      setSelectedCity(event.target.value);
    }
  
    const handleDistrictChange = (event:any) => {
      setSelectedDistrict(event.target.value);
    }
  
    return (
      <div className='mt-5'>
        <div style={{ maxWidth: '400px', margin: 'auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' }}>
          <h1 style={{ marginBottom: '10px', fontSize: '1.5rem' }}>Countries</h1>
  
          <select style={{ marginBottom: '20px', padding: '8px', fontSize: '1rem', width: '100%', borderRadius: '4px', border: '1px solid #ccc' }} onChange={handleCountryChange}>
            <option value="">Select a country</option>
            {countries.map(country => (
              <option key={country.code} value={country.code}>{country.name}</option>
            ))}
          </select>
  
          <h1 style={{ marginBottom: '10px', fontSize: '1.5rem' }}>Cities</h1>
          {selectedCountry && (
            <select style={{ marginBottom: '20px', padding: '8px', fontSize: '1rem', width: '100%', borderRadius: '4px', border: '1px solid #ccc' }} onChange={handleCityChange}>
              <option value="">Select a city</option>
              {countries.find(country => country.code === selectedCountry)?.cities.map((city, index) => (
                <option key={index}>{city.name}</option>
              ))}
            </select>
          )}
  
          <h1 style={{ marginBottom: '10px', fontSize: '1.5rem' }}>Sectors</h1>
          {selectedCountry && selectedCity && (
            <select style={{ padding: '8px', fontSize: '1rem', width: '100%', borderRadius: '4px', border: '1px solid #ccc' }} onChange={handleDistrictChange}>
  
              <option value="">Select a district</option>
              {countries.find(country => country.code === selectedCountry)?.cities.find(city => city.name === selectedCity)?.districts.map((district,index) => (
                <option key={index}>{district}</option>
              ))}
            </select>
          )}
        </div>
      </div>
  
  
  
    );
  }
  

export default DataExploration

