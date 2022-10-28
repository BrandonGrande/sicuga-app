import {useContext,useEffect,useState,React} from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../auth/AuthContext';
import Swal from 'sweetalert2';

export const LoginPage = () => {

	const {login} = useContext(AuthContext);
    
	const [form,setForm] = useState({
		email:'',
		password:'',
		rememberme:false
	});

	useEffect(() => {
		const email = localStorage.getItem('email');
		if(email){
			setForm((form)=>({
				...form,
				rememberme:true,
				email
			}))
		} 
	}, [])

	const onChange = ({target}) =>{
		const {name,value} = target;
		setForm({
			...form,
			[name]:value
		});
	}

	const toggleCheck = () =>{
		setForm({
			...form,
			rememberme:!form.rememberme 
		});
	};
	
	const onSubmit = async (e) =>{
		e.preventDefault();
		if (form.rememberme){
			localStorage.setItem('email',form.email); 
		}else{
			localStorage.removeItem('email');
		}

		const {email,password}  = form;
		const msg = await login(email,password); 
		
		if (msg!==true){
			Swal.fire('Error',msg,'error');
		}

	}

	const todoOk= ()=>{
		return (form.email.length>0 && form.password.length>0) ? true:false;
	}
	
	return (
    
        <div className="limiter">
            <div className="container-login100">
                 <div className="wrap-login100 p-t-50 p-b-90">

        
           <form className="login100-form validate-form flex-sb flex-w"
		   onSubmit={onSubmit}
		   >
					<span className="login100-form-title mb-3">
						Sign in to 
					</span>
					
					<div className="wrap-input100 validate-input mb-3">
						<input className="input100" 
						type="email" 
						name="email" 
						placeholder="Email" 
						value={form.email}
						onChange={onChange}
						/>
						<span className="focus-input100"></span>
					</div>
					
					
					<div className="wrap-input100 validate-input mb-3">
						<input className="input100" 
						type="password" 
						name="password" 
						placeholder="Password"
						value={form.password}
						onChange={onChange} />
						
						<span className="focus-input100"></span>
					</div>
					
					<div className="row mb-3">
						<div className="col" onClick={()=>toggleCheck()}>
							<input 
							className="input-checkbox100" 
							id="ckb1" 
							type="checkbox" 
							name="remember-me"
							checked={form.rememberme}
							readOnly
							/>
							<label className="label-checkbox100">
								Recordarme
							</label>
						</div>

						<div className="col text-right">
							<Link to="/auth/register" className="txt1">
								¿Nueva cuenta?
							</Link>
						</div>
					</div>

					<div className="container-login100-form-btn m-t-17">
						<button 
						type="submit"
						className="login100-form-btn"
						disabled={!todoOk()}
						>
							Ingresar
						</button>
					</div>

				</form>
        </div>
		</div>
		</div>
    )
}
