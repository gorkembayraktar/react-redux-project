import React from 'react';


const PasswordView = ({onViewChange}) => (
    <div>
        ŞİFREMİ UNUTTUM SAYFASI
        <button type="button" onClick={()=>{
            onViewChange(1);
        }} className="btn btn-danger">GİRİŞ YAP</button>
    </div>
);
export default PasswordView;