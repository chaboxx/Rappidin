import { NextPage } from 'next';

import { Layout } from '../../layouts/Layout';
import { PaymentMethods } from '../../components/checkout/PaymentMethods';
import { PayButton } from '../../components/checkout/PayButton';
import { Directions } from '../../components/ui/checkout/Directions';

const directions = ["Home","Work"];

const CheckOutScreen :NextPage = () => {
  return (
    <Layout title='Payment Rappidin' description="Rappidin Payment">
      <div style={{backgroundColor:"#f8f9fa"}}>

        <Directions directions={directions}/>
        <PaymentMethods />
        <PayButton/>
      </div>
    </Layout> 
  )
}

export default CheckOutScreen;