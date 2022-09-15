import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { baseUrl } from '../../utils/BaseUrl'
import { Card } from 'antd';
import { Link } from 'react-router-dom';

export default function Cards() {
  const [players, setplayers] = useState([])
  const ApiCall = async () => {
    try {
      const res = await axios.get(`${baseUrl}/api`)
      setplayers(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    ApiCall();
  }, [])


  return (
    <>
      <div className="card_home_main">
        <div className="container">
          <div className="row">
            {
              players.map(data => (
                <>
                  <div className="col-md-3 col-12">
                    <Link to={`/player/${data._id}`}>
                    <Card
                      className='Card_main'
                      hoverable
                      style={{ width: 240, margin: '10px auto' }}
                      cover={
                        <img alt="example" className=' max-h-[200px] min-h-[200px] object-cover ' src={data.profilePhoto} />}
                    >
                      <h1>{data.name}</h1>
                      <p>{data.Country}</p>
                    </Card>
                    </Link>
                  </div>

                </>
              ))
            }</div></div>
      </div>
    </>
  )
}
