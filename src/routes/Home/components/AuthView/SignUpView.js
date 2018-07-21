import React from 'react';

const SignUpView = ({onViewChange}) => (
  <div>
      <input type="text" className="form-control"/>
      <input type="submit" value="Kayıt ol" className="form-control" />

      <button type="button" onClick={()=>{
          onViewChange(1);
      }} className="btn btn-danger">Giriş YAP</button>


  </div>
);

export default SignUpView;