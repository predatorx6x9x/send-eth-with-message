import React, { useEffect } from 'react'
import { useWeb3React } from '@web3-react/core';
import Web3Utils from './Web3Utils';

export default function ConnectButton(props) {
  const ctx = useWeb3React();

  useEffect(() => {
    try { ctx.activate(Web3Utils.connectors.injected); } catch (error) { }
  }, [])

  var handleConnect = () => {
    ctx.active ? ctx.deactivate() : ctx.activate(Web3Utils.connectors.injected);
  }

  return (
    <button onClick={handleConnect}className="btn btn-light">
    {props.children}
      {(ctx.active && ctx.account)
        ? ctx.account.slice(0, 4) + '..' + ctx.account.slice(-2)
        : ctx.error
          ? 'Error'
          : props.text}
    </button>
  );
}