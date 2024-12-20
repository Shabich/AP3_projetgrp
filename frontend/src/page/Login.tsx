function Login() {
  return (
    <div className="flex justify-center p-20">
      <div className="flex flex-col justify-center items-center p-5 bg-white shadow-xl w-96 rounded-md gap-4">
        <div className="flex flex-col mr-52">
          <h2 className="text-lg bold">Sign in</h2>
          <p>Connectez-vous</p>
        </div>
        <div className="flex flex-col gap-4">
          <input
            className="border border-gray-300 focus:border-black w-60 p-2 rounded-md focus:outline-none"
            type="text"
            placeholder="mail"
          />
          <input
            className="border border-gray-300 focus:border-black w-60 p-2 rounded-md focus:outline-none"
            type="password"
            placeholder="password"
          />
          <a href="" className="text-blue">
            Mot de passe oublie
          </a>
        </div>
        <button className="px-10 bg-blue py-4 text-white rounded-xl">Se connecter</button>
      </div>
    </div>
  )
}

export default Login
