import React, { useEffect, useState } from 'react';

function api() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const fethcData = async () => {
    const response = await fetch("http://localhost")}

  useEffect(() => {
    fethcData()
  },[]);






  return (
    <div>
      
    </div>
  );
}

export default api;