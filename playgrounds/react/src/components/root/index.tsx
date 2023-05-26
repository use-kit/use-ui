import reactLogo from '/react.svg'
import viteLogo from '/vite.svg'
import useLogo from '/use.svg'
import './index.css'

function Root() {
  return (
    <>
      <div>
        <a href="https://github.com/use-kit" target="_blank">
          <img src={useLogo} className="logo use" alt="Use logo" />
        </a>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo vite" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h2>🎉🎉 Use UI 🎈🎈</h2>
    </>
  )
}

export default Root
