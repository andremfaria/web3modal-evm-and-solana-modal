import './App.css'
import { getEvmModal } from './modals/evm-modal'
import { getSolanaModal } from './modals/solana-modal'


function App() {

  
  const getModal = (isSolana: boolean) => {
    if (isSolana) {
      return getSolanaModal()
    } else {
      return getEvmModal()
    }
  }
  const openModalHandler = (isSolana: boolean) => {
    const modal = getModal(isSolana)
    modal.resetNetwork()
    console.log("modal status:", modal.getThemeMode())

    modal.open({view: "Connect"})
  }


  return (
    <>
      <button onClick={openModalHandler.bind(null, false)}>Open EVM modal</button>
      <button onClick={openModalHandler.bind(null, true)}>Open Solana Modal</button>
    </>
  )
}

export default App
