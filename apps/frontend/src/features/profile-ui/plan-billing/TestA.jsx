import { createStyles, Grid, TextInput } from '@mantine/core'
import Btn from '../Btn'
import { useCreditCardValidator, images } from 'react-creditcard-validator';
import { useState } from 'react';

const useStyle = createStyles((theme) => ({
    mainContainer: {
        position: "relative",
        marginTop: "3%",
    },
    inputBtn: {
        position: "absolute",
        top: 25,
        right: 0,
        width: "90%",
    },
    img: {
      position: "absolute",
      top: 43,
      right: 20,
      display: "fix"
    }, 
    input: {
      position: "relative",
    },
    error: {
      color: "red",
    }
}))

function AddCard({inputLabel, placeholder, btnLabel, btnVarient}) {
    const { classes, theme } = useStyle()
    const [card, setCard] = useState()

    function expDateValidate(month, year) {
      if (Number(year) > 2035) {
        return 'Expiry Date Year cannot be greater than 2035';
      }
      return;
    }

    const {
      getCardNumberProps,
      getCardImageProps,
      getCVCProps,
      getExpiryDateProps,
      meta: { erroredInputs }
    } = useCreditCardValidator({ expiryDateValidator: expDateValidate });

  return (
    // <form onSubmit={form.onSubmit(console.log)}>
    <form>
        <Grid className={classes.mainContainer}>
            <Grid.Col span={8} className={classes.input}>
                <TextInput
                    placeholder={placeholder}
                    label={inputLabel}
                    withAsterisk
                    onChange={(val) => setCard(val)}
                    // {...form.getInputProps(formData)}
                    {...getCardNumberProps()}
                />
                <svg {...getCardImageProps({ images })} className={classes.img} />
                <small className={classes.error}>{erroredInputs.cardNumber && erroredInputs.cardNumber}</small>
            </Grid.Col>
            <Grid.Col span={4}  className={classes.inputBtn}>
                <Btn 
                    onClick={() => console.log(card)}
                    label={btnLabel}
                    btnWidth="100%"
                    varient={btnVarient ?? undefined}
                />
            </Grid.Col>
        </Grid>
    </form>
  )
}

export default AddCard