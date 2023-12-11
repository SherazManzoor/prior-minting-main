import * as React from "react";

import Image from "next/image";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import styles from "./MintHero.module.scss";
import { Button, Stack } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import Web3 from "web3";
import {
  contract_address,
  contract_abi,
  buy_price,
  speedy_nodes,
} from "./config";

const MintHero = () => {
  const [count, setCount] = React.useState(1);

  const handleIncrease = () => {
    if (count < 7) {
      setCount(count + 1);
    }
  };

  const handleDecrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  useEffect(() => {
    fetch_data();
    fetch_supply();
  }, []);

  const [totalsupply, settotalsupply] = useState(0);
  const [price, set_price] = useState(0);
  // const [total, set_total] = useState(0.2);
  // set_total(mintNumber*price);
  let total = count * price + 0.000000000000001;

  const mintButtonClickHandler = () => {
    sale_controller();
  };

  async function fetch_supply() {
    const web3 = new Web3(speedy_nodes);
    const contract = new web3.eth.Contract(contract_abi, contract_address);
    //await Web3.givenProvider.enable()

    contract.methods.totalSupply().call((err, result) => {
      console.log("error: " + err);
      if (result != null) {
        settotalsupply(result);
      }
    });
  }

  async function fetch_data() {
    const web3 = new Web3(speedy_nodes);
    const contract = new web3.eth.Contract(contract_abi, contract_address);
    //await Web3.givenProvider.enable()

    contract.methods.Presale_status().call((err, result) => {
      console.log("error: " + err);
      if (result === true) {
        set_price(0.04);
      } else {
        set_price(0.02);
      }
    });
  }

  async function show_error_alert(error) {
    let temp_error = error.message.toString();
    console.log(temp_error);
    let error_list = [
      "It's not time yet",
      "Sent Amount Wrong",
      "Max Supply Reached",
      "You have already Claimed Free Nft.",
      "Presale have not started yet.",
      "You are not in Presale List",
      "Presale Ended.",
      "You are not Whitelisted.",
      "Sent Amount Not Enough",
      "Max 20 Allowed.",
      "insufficient funds",
      "Sale is Paused.",
      "mint at least one token",
      "max per transaction 20",
      "Not enough tokens left",
      "incorrect ether amount",
      "5 tokens per wallet allowed in presale",
      "10 tokens per wallet allowed in publicsale",
      "Not enough tokens remaining in current phase",
      "Invalid merkle proof",
      "Wallet limit Reached",
    ];

    for (let i = 0; i < error_list.length; i++) {
      if (temp_error.includes(error_list[i])) {
        // set ("Transcation Failed")
        alert(error_list[i]);
      }
    }
  }
  function sale_controller() {
    try {
      const web3 = new Web3(speedy_nodes);
      const contract = new web3.eth.Contract(contract_abi, contract_address);
      //await Web3.givenProvider.enable()
      console.log("error: i am in fetch ");
      contract.methods.Presale_status().call((err, result) => {
        console.log("error: " + err);
        console.log(result);
        if (result === true) {
          presalemint_nft();
        } else {
          mint_nft();
        }
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function presalemint_nft() {
    if (Web3.givenProvider) {
      const web3 = new Web3(Web3.givenProvider);
      await Web3.givenProvider.enable();
      const contract = new web3.eth.Contract(contract_abi, contract_address);
      const addresses = await web3.eth.getAccounts();
      const address = addresses[0];
      console.log("addresses[0]: " + addresses[0]);
      // console.log("addresses[1]: "+addresses[1])
      // console.log("Default address: "+await web3.eth.defaultAccount)

      try {
        const estemated_Gas = await contract.methods
          .buy_presale(count)
          .estimateGas({
            from: address,
            value: web3.utils.toWei(total.toString(), "ether"),
            maxPriorityFeePerGas: null,
            maxFeePerGas: null,
          });
        console.log(estemated_Gas);

        const result = await contract.methods.buy_presale(count).send({
          from: address,
          value: web3.utils.toWei(total.toString(), "ether"),
          gas: estemated_Gas,
          maxPriorityFeePerGas: null,
          maxFeePerGas: null,
        });
      } catch (error) {
        show_error_alert(error);
      }

      //await contract.methods.tokenByIndex(i).call();
    }
  }
  async function mint_nft() {
    if (Web3.givenProvider) {
      const web3 = new Web3(Web3.givenProvider);
      await Web3.givenProvider.enable();
      const contract = new web3.eth.Contract(contract_abi, contract_address);

      const addresses = await web3.eth.getAccounts();
      const address = addresses[0];
      console.log("addresses[0]: " + addresses[0]);
      // console.log("addresses[1]: "+addresses[1])
      // console.log("Default address: "+await web3.eth.defaultAccount)
      try {
        const estemated_Gas = await contract.methods.buy(count).estimateGas({
          from: address,
          value: web3.utils.toWei(total.toString(), "ether"),
          maxPriorityFeePerGas: null,
          maxFeePerGas: null,
        });
        console.log(estemated_Gas);
        const result = await contract.methods.buy(count).send({
          from: address,
          value: web3.utils.toWei(total.toString(), "ether"),
          gas: estemated_Gas,
          maxPriorityFeePerGas: null,
          maxFeePerGas: null,
        });
      } catch (error) {
        show_error_alert(error);
      }

      // await contract.methods.tokenByIndex(i).call();
    }
  }

  return (
    <section className={styles.wrapper}>
      <Container>
        <Grid container justifyContent="center" alignItems="center">
          <Grid item xs={12} sm={12} md={10}>
            <div className={styles.content}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexWrap: "nowrap",
                  marginBottom: "2rem",
                  backgroundColor: "#fff",
                  justifyContent: "center",
                }}
              >
                <h2 className={styles.headline}>QUIT BITCHING COALITION</h2>
                {/* <Box
              sx={{
                height: "120px",
                width: "120px",
                // backgroundColor: "#fff",
              }}
            />
            <Box>
              <h2 className={styles.headline}>QUIT BITCHING COALITION</h2>
            </Box>
            <Box
              sx={{
                height: "120px",
                width: "120px",
                // backgroundColor: "#fff",
              }}
            /> */}
              </Box>

              <Grid container spacing={3} className={styles._content_wrapper}>
                <Grid item xs={12} sm={6}>
                  <Box>
                    <Image
                      src="/images/min-bg.jpeg"
                      height={500}
                      width={1200}
                      objectFit="cover"
                      alt="Mint Hero"
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} sm={5}>
                  <Box
                    sx={{
                      padding: "10px 30px",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "10px 0",
                      }}
                    >
                      <Box className={styles._title}>Supply</Box>
                      <Box className={styles._content}>
                        {totalsupply} / 2929
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "10px 0",
                      }}
                    >
                      <Box className={styles._title}>Goldlist Price</Box>
                      <Box className={styles._content}>0.02 ETH</Box>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "10px 0",
                      }}
                    >
                      <Box className={styles._title}>Holiday Price</Box>
                      <Box className={styles._content}>0.02 ETH</Box>
                    </Box>
                    <Stack
                      direction="row"
                      alignItems="center"
                      spacing={2}
                      justifyContent="space-between"
                    >
                      <Box className={styles._title}>Amount</Box>
                      <div>
                        <Stack
                          direction="row"
                          alignItems="center"
                          justifyContent="space-between"
                          spacing={2}
                        >
                          <div>
                            <button
                              className={styles.countBtn}
                              onClick={handleDecrease}
                              disabled={count === 1}
                              style={{
                                backgroundColor:
                                  count === 1 ? "#707070" : "#69ffe8",
                              }}
                            >
                              -
                            </button>
                          </div>
                          <div>
                            <p className={styles._content}>{count}</p>
                          </div>
                          <div>
                            <button
                              className={styles.countBtn}
                              onClick={handleIncrease}
                              style={{
                                backgroundColor: "#69ffe8",
                              }}
                            >
                              +
                            </button>
                          </div>
                        </Stack>
                      </div>
                    </Stack>

                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginTop: "3rem",
                      }}
                    >
                      <Button
                        onClick={sale_controller}
                        variant="contained"
                        color="primary"
                        className={styles.btn}
                      >
                        Mint now
                      </Button>
                    </Box>
                  </Box>
                </Grid>
                <Grid xs={12} sm={1} />
              </Grid>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default MintHero;
