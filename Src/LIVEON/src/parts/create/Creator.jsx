import { AppContext } from '@/App';
import FormInput from '@/components/FormInput';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc, collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '@/firebase'; // Firestore 초기화 파일 임포트

function Creator() {
  const { updateCreateRoomForm } = useContext(AppContext);
  const [, setProductIdData] = useState('');
  const navigate = useNavigate();
  const [idData, setIdData] = useState({});
  const [userFetched, setUserFetched] = useState(false);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate('/signin');
      } else {
        const userId = user.uid;
        
        async function fetchUserData() {
          try {
            const userRef = doc(db, 'users', userId);
            const userSnapshot = await getDoc(userRef);
            if (userSnapshot.exists()) {
              const userData = userSnapshot.data();
              setIdData(userData);
              updateCreateRoomForm('creator', { id: userId, name: userData.name });
            } else {
              console.log('No data available');
            }
          } catch (error) {
            console.error('Error fetching user data:', error);
          }
        }

        async function fetchProductData() {
          try {
            const productsRef = collection(db, 'products');
            const q = query(productsRef, where('creator.id', '==', userId));
            const querySnapshot = await getDocs(q);
            const productsData = querySnapshot.docs.map(doc => doc.data());
            setProductIdData(productsData);
          } catch (error) {
            console.error('Error fetching products:', error);
          }
        }

        if (!userFetched) {
          fetchUserData();
          setUserFetched(true);  // Ensures fetchUserData is called only once
        }
        fetchProductData();  // Called every time user logs in
      }
    });

    return () => unsubscribe();
  }, [navigate, updateCreateRoomForm]);

  return (
    <>
      <FormInput
        readOnly
        value={idData.name || ''}
        label="생성자"
        type="text"
        name="creator"
        placeholder="생성자 정보"
        inputClassName="w-full defaultInput"
      />
    </>
  );
}

export default Creator;







