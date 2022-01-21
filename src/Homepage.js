import React, { useRef } from 'react';
import ConnectButton from './ConnectButton';
import { FaWallet } from 'react-icons/fa';

import { Container, Row, Col } from 'react-bootstrap';
import { useWeb3React } from '@web3-react/core';

import toast from 'react-hot-toast';

function Homepage(props) {
    const addressRef = useRef();
    const messageRef = useRef();

    const ctx = useWeb3React();

    const txnPrice = "0.0001";

    const handleSend = (ev) => {
        if (!ctx.account || !ctx.library) return;

        const web3 = ctx.library;
        if (!addressRef.current.value) return toast.error('Invalid address');

        try {
            web3.eth.sendTransaction({
                from: ctx.account,
                to: addressRef.current.value,
                value: web3.utils.toWei(txnPrice, "ether"),
                data: web3.utils.toHex(messageRef.current.value)
            }, (error, result) => {
                if (error)
                    toast.error("Transaction failed!");
                else
                    toast.success('Transaction succeeded!');
            });
        } catch (error) {
            if (/Provided address (.*) is invalid/.test(error.message))
                toast.error('Invalid address');
        }
    }

    return (
        <Container>
            <Row className="justify-content-center" flex="true">
                <Col lg={12} xl={7} >
                    <Row flex="true" className="align-items-center">
                        <Col xs={8} md={9} lg={10}>
                            <h1 className='text-light'>
                                Simple on chain message sender
                            </h1>
                        </Col>
                        <Col xs={4} md={3} lg={2}>
                            <ConnectButton text="Connect">
                                <FaWallet className="header_icon" />
                            </ConnectButton>
                        </Col>
                    </Row>
                    <hr />
                    <Row >
                        <Col>
                            <div className="form-group align-left d-flex align-items-center">
                                <label className="text-light h3 me-3" htmlFor="address">To:</label>
                                <input ref={addressRef} type="text" className="form-control" id="address" placeholder="Enter address" />
                            </div>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col>
                            <div className="form-group align-left">
                                <label className="text-light h3" htmlFor="message">Your Message:</label>
                                <textarea ref={messageRef} placeholder="Enter your message" className="form-control" id="message" rows="3" />
                            </div>
                        </Col>
                    </Row>
                    <Row className="mt-3 justify-content-center" flex="true">
                        <Col>
                            <button type="submit" className="btn btn-light w-100" onClick={handleSend}>
                                Send Message
                            </button>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='align-left'>
                            <span className="text-muted align-left">Transaction costs {txnPrice}</span>
                        </Col>
                        <Col className='align-right'>
                            <span className="text-muted ">
                                by
                                <a className="ms-1" href="https://twitter.com/predatorx6x9x" target="_blank">
                                    predatorx6x9x
                                </a>
                            </span>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default Homepage;