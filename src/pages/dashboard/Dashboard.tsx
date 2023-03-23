import React from 'react'
import useAxiosPrivate from '@/hooks/useAxiosPrivate';


export const Dashboard = () => {
  const { axiosInterviewAPI } = useAxiosPrivate();

  return (
    <div>Dashboard</div>
  )
}
