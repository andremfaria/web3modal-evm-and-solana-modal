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

    modal.open({view: "Connect"})
  }


  return (
    <>
      <button onClick={openModalHandler.bind(null, false)}>Open EVM modal (Light theme)</button>
      <button onClick={openModalHandler.bind(null, true)}>Open Solana Modal (Dark mode)</button>
    </>
  )
}

export default App
