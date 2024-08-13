import React, { useState, useEffect } from 'react';
import CpuUsageChart from './CpuUsageChart'; // Adjust the path if necessary
import MemoryUsageChart from './MemoryUsageChart';
import RadialBarChart from './RadialBarChart'; // Ensure the path is correct

const Dashboard = () => {



  return (
    <>
      <div className="w-full h-[100vh] bg-slate-100">
        <div className='flex gap-2 mt-3' style={{ marginLeft: '17rem', width: 'calc(100% - 17rem)' }}>
          <div className='border p-4 rounded shadow flex-1 h-[200px] flex flex-col justify-between'>
            <div className='flex flex-col justify-between h-full'>
              <h3 className='text-lg font-semibold'>Uptime</h3>
              <h2 className='text-xl font-bold'>1 week</h2>
            </div>

          </div>
          <div className='border p-4 rounded shadow flex-1 h-[200px] flex flex-col justify-between'>
            <div className='flex flex-col justify-between h-full'>
              <h3 className='text-lg font-semibold'>Containers</h3>
              <h2 className='text-xl font-bold'>5 running</h2>
            </div>
          </div>
          <div className='border p-4 rounded shadow flex-1 h-[200px] flex flex-col justify-between'>
            <div className='flex flex-col justify-between h-full'>
              <h3 className='text-lg font-semibold'>Disk space</h3>
              <RadialBarChart value={76} label="Disk Space" />
            </div>
          </div>
          <div className='border p-4 rounded shadow flex-1 h-[200px] flex flex-col justify-between'>
            <div className='flex flex-col justify-between h-full'>
              <h3 className='text-lg font-semibold'>Memory</h3>
              <RadialBarChart value={60} label="Memory" />
            </div>
          </div>
          <div className='border mr-3 p-4 rounded shadow flex-1 h-[200px] flex flex-col  justify-between'>
            <div className='flex flex-col justify-between h-full'>
              <h3 className='text-lg font-semibold'>Swap</h3>
              <RadialBarChart value={40} label="Swap" />
            </div>
          </div>
        </div>
        <div className='flex gap-2 mt-3' style={{ marginLeft: '17rem', width: 'calc(100% - 17rem)' }}>
          <div className='border p-4 rounded shadow flex-1 h-[200px] flex flex-col justify-between'>
            <div className='flex flex-col justify-between h-full'>
              <h3 className='text-lg font-semibold'>Network Traffic</h3>
              <h2 className='text-xl font-bold'>1 week</h2>
            </div>

          </div>
          <div className='border p-4 rounded shadow flex-1 h-[200px] flex flex-col justify-between'>
            <div className='flex flex-col '>
              <h3 className='text-lg font-semibold mb-2'>CPU Usage</h3>
            
                {/* <CpuUsageChart className='w-full h-[200px]' /> */}
      
            </div>
          </div>


          <div className='border p-4 rounded shadow flex-1 h-[200px] flex flex-col justify-between'>
            <div className='flex flex-col justify-between h-full'>
              <h3 className='text-lg font-semibold'>Load</h3>
              <RadialBarChart value={76} label="Disk Space" />
            </div>
          </div>
          <div className='border p-4 rounded shadow flex-1 h-[200px] flex flex-col justify-between'>
            <div className='flex flex-col justify-between h-full'>
              <h3 className='text-lg font-semibold'>Used disk space</h3>
              <RadialBarChart value={60} label="Memory" />
            </div>
          </div>
          <div className='border mr-3 p-4 rounded shadow flex-1 h-[200px] flex flex-col  justify-between'>
            <div className='flex flex-col justify-between h-full'>
              <h3 className='text-lg font-semibold'>Available memory</h3>
              <RadialBarChart value={40} label="Swap" />
            </div>
          </div>
        </div>



        <div className="w-[1200px]   mt-5 flex space-x-4">
          <div className="flex-1  ml-[20rem] ">
            <CpuUsageChart />
          </div>
          <div className="flex-1">
            <MemoryUsageChart />
          </div>
        </div>
      </div>

    </>
  );
};

export default Dashboard;
