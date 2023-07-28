import Link from 'next/link'
import React from 'react'

const AdminHeader = () => {
  return (
    <div>
      <div className="HeaderBox">
        {/* <div className="menu-Icon"></div> */}
        <div className="hder-Tabs">
          <ul className="tabsList flex items-center gap-4 bg-blue-500 text-xl justify-center py-2 px-2 mb-2 font-medium text-gray-50 rounded-md">
            <Link href={'/Admin/admin'}>
              <li className="tabs_Aadmin cursor-pointer">Admin Home</li>
            </Link>
            <Link href={'/Admin/AdminEntertainment'}>
              <li className="tabs_Aadmin cursor-pointer">Entertainment</li>
            </Link>
            <Link href={'/Admin/AdminTutorial'}>
              <li className="tabs_Aadmin cursor-pointer">Tutorials</li>
            </Link>
            <Link href={'/'}>
              <li className="tabs_Aadmin cursor-pointer">Courses</li>
            </Link>
            <Link href={'/'}>
              <li className="tabs_Aadmin cursor-pointer">Products</li>
            </Link>
            <Link href={'/'}>
              <li className="tabs_Aadmin cursor-pointer">Certification</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default AdminHeader
