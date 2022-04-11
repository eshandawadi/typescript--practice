import React, { FC } from 'react';
import logo from './logo.svg';
import './App.css';
import InputField from './InputField';
import '../src/Input.css'
import { SelectInp } from './SelectCompo/SelectInp';
import Map from '../src/SelectCompo/Map';
import { Dropdown } from './dropdown Menu/Dropdown';
import Header from './Login/Header';
import { Input } from './Login/Input';
import { ButtonComp } from './Login/ButtonComp';
import Interfaces from './dropdown Menu/interfacee';
import { Interface } from 'readline';



const App: FC = () => {
  const Udata = [
    {
      userId: 1,
      id: 1,
      title: "heiufhbcdh jkhfwdbc vufhvuihv hvuhwviw hwhfwib",
      body: "rkokgijeoijgoiej ierjgijeir jrgiejprgj"


    },
    {
      userId: 2,
      id: 2,
      title: "heiufhbcdh jkhfwdbc vufhvuihv hvuhwviw hwhfwib",
      body: "rkokgijeoijgoiej ierjgijeir jrgiejprgj"


    },
    {
      userId: 3,
      id: 3,
      title: "heiufhbcdh jkhfwdbc vufhvuihv hvuhwviw hwhfwib",
      body: "rkokgijeoijgoiej ierjgijeir jrgiejprgj"


    }
  ]

  return (
    <div>
          {/* <InputField inputFeildProps={{className:"input",placeholder:"Enter anything", type:"text" }}/> */}


          {/* <InputField InputProps={{
          className:'inputs',placeholder:'enter number ',style:{inputs:{width:'50px',height:"12px"}}
        } } ImgProps={{className:'image1',src:logo,style:{image:{width:'50px',height:'50px'}}}} Master={{className:"abc"}} LogoProps={{className:"fas fa-search-location logo"}}/>

        <Map/>
        <Dropdown /> */}
          {/* <Header InputProps={{label:'First Name',className:'sdd',placeholder:'enter ...',style:{width:'50px'}}}  LabelProps={{label:'Last Name',placeholder:'enter last name'}}/>
        <Header InputProps={{label:'First Name',className:'sdd',placeholder:'enter ...',style:{width:'50px'}}}  LabelProps={{label:'Last Name',placeholder:'enter last name'}}/> */}


          <Input inp={{ name: "username", placeholder: "Enter username", type: "text", classname: "user" }} labp={{ label: "USER NAME:" }} />
          <Input inp={{ name: "Password", placeholder: "Enter password", type: "password", classname: "password" }} labp={{ label: "PASSWORD:" }} />
          <ButtonComp btntype='reset' btnlabel='click me' />
          {Udata.map((post) => {
            return <div>
              <Interfaces UserId={post.userId} body={post.body} id={post.id} title={post.title} />
            </div>
          })}

    </div>
  );
        }
  export default App;
