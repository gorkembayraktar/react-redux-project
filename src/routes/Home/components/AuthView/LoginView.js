import React from 'react';


const loginView = ({onViewChange}) => (

    <div>
        <form>
            <div className="input-group">
                <span className="input-group-addon">
                    <i className="glyphicon glyphicon-user"></i></span>
                <input id="email" type="text" className="form-control"
                       name="email" placeholder="Email" />
            </div>
            <div className="form-group">

                <input type="password" className="form-control"
                       id="exampleInputPassword1" placeholder="Password" />
            </div>

            <button className="btn btn-primary">Submit</button>
        </form>

        <button type="button" onClick={()=>{
            onViewChange(2);
        }} className="btn btn-info">Kayıt ol</button>

        <button type="button" onClick={()=>{
            onViewChange(3);
        }} className="btn btn-success">Şifremi unuttum </button>
    </div>

)

export default loginView;