import { createStyles, Title } from '@mantine/core'
import BillingInput from './BillingInput'
import { useForm } from '@mantine/form';
import AddCard from './TestA';

const useStyle = createStyles((theme) => ({
    bilingContainer: {
        marginTop: "10%",
    }
}))

function BillingInfo() {
  const { classes, theme } = useStyle()

  const sender = useForm({
    initialValues: { email: '' },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });
  // const cardInfo = useForm({
  //   initialValues: { cardNo: '' },
  //   validate: {
  //     cardNo: (value) => (/^[1-9][0-9]{15,15}$/.test(value) ? null : 'Invalid card number (1234123412341234)'),
  //   },
  // });

  return (
    <div className={classes.bilingContainer}>
        <Title weight={400} order={3}>
            Billing Information
        </Title>
        <BillingInput 
            btnVarient="outline" 
            btnLabel="Save Changes" 
            inputLabel="Billing Notifications sent to"
            placeholder='sender email'
            form={sender}
            formData='email'
        />
        {/* <BillingInput 
            btnLabel="Edit Information"
            inputLabel="Credit card information"
            placeholder='1234123412341234'
            form={cardInfo}
            formData='cardNo'
        /> */}
        <AddCard 
          btnLabel="Edit Information"
          inputLabel="Credit card information"
          placeholder='1234123412341234'
          btnVarient={undefined}   
        />
    </div>
  )
}

export default BillingInfo