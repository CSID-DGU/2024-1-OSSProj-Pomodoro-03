import {pb} from '@/api/pocketbase';
import Spinner from '@/components/Spinner';
import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import StatusIcon from './StatusIcon';

function DetailStatus() {
  const {id} = useParams();
  const [data, setData] = useState();

  useEffect(() => {
    async function detailProgress() {
      try {
        const getStatus = await pb.collection('products').getOne(id);
        setData(getStatus);
      } catch (error) {
        throw new Error(error);
      }
    }

    detailProgress();
  }, [id]);

  if (data) {
    return (
      <>
        {data.status === '모집중' ? (
          <div className="flex">
            <StatusIcon color="#30B66E" textColor="#FFF" text="모집중" />
            <StatusIcon text="쉐어중" />
            <StatusIcon text="종 료" textX="30%" textY="64%" />
          </div>
        ) : data.status === '쉐어중' ? (
          <div className="flex">
            <StatusIcon text="모집중" />
            <StatusIcon color="#F09847" textColor="#FFF" text="쉐어중" />
            <StatusIcon text="종 료" textX="30%" textY="64%" />
          </div>
        ) : (
          <div className="flex">
            <StatusIcon text="모집중" />
            <StatusIcon text="쉐어중" />
            <StatusIcon
              color="#8D948F"
              textColor="#FFF"
              text="종 료"
              textX="30%"
              textY="64%"
            />
          </div>
        )}
      </>
    );
  } else {
    <Spinner />;
  }
}

export default DetailStatus;