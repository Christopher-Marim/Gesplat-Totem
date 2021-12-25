import {useEffect,useState} from 'react';
import QRCode from 'qrcode';

interface Props {
    text:string;
}

export const QrCodeComponent = ({text}:Props) => {
 const [src, setSrc] = useState('');

 useEffect(()=>{
    QRCode.toDataURL(text,{scale:15, margin:1}).then(setSrc);
 },[])

  return (
    <>
      <img src={src} width={300} height={300} style={{objectFit:'cover', borderRadius:10}}/>
    </>
  );
};
