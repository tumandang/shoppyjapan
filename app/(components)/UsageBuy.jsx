import { UserPlus } from 'lucide-react'
import React from 'react'

function UsageBuy() {
  return (
    <div className='bg-amber-100 h-full w-full py-16'>
        <div className="padd-cont flexCenter flex-row gap-x-10">
            <div className="w-1/5 h-40 flex flex-col">
                <div className="bg-orange-500 flexCenter flex-row gap-x-2  w-auto py-2 rounded-md">
                    <UserPlus color='black'></UserPlus>
                    <h5>Step 1</h5>
                </div>

            </div>
            <div className="bg-orange-500 w-1/5 h-40 flex flex-col">
            Step 1
            </div>
            <div className="bg-yellow-500 w-1/5 h-40 flex flex-col">
            Step 1
            </div>
            <div className="bg-green-500 w-1/5 h-40 flex flex-col">
            Step 1
            </div>
            <div className="bg-blue-500 w-1/5 h-40 flex flex-col">
            Step 5
            </div>
        </div>
    </div>
  )
}

export default UsageBuy