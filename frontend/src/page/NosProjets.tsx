function NosProjets() {
  return (
    <div>
      <div className="p-9">
        <section className="flex flex-col justify-center items-center bg-[url('/public/images/laboratoire-danalyse-medicale.png')] bg-cover bg-no-repeat h-[50vh] w-full rounded-3xl">
          <div className="flex flex-col justify-center items-center text-white p-9 m-auto gap-9">
            <h1 className="text-9xl">Nos projets</h1>
            <p className="text-3xl">Innovation, Recherche et Bien-être pour Tous</p>
          </div>
        </section>

        <section className="flex flex-col justify-center items-center p-9">
          <p className="w-[900px] text-xl">
            Nous concevons et développons des solutions innovantes en coopérant avec des partenaires
            et avec des professionnels de santé, en nous inspirant sans cesse de la nature et des
            plantes, en plaçant toujours le patient au cœur de notre recherche et développement.
          </p>
        </section>

        <section className="flex flex-col justify-center items-center p-9">
          <h2>Traitement Immunothérapeutique Contre les Maladies Auto-Immunes</h2>
          <p className="w-[900px] text-xl">
            Ce projet vise à développer un traitement innovant utilisant l'immunothérapie pour
            cibler spécifiquement les cellules responsables des maladies auto-immunes. En modulant
            le système immunitaire de manière précise, notre approche réduit les effets secondaires
            tout en offrant une réponse thérapeutique durable. Actuellement en phase d'essais
            cliniques, ce traitement pourrait représenter un espoir immense pour des millions de
            patients.
          </p>
        </section>
      </div>
    </div>
  )
}

export default NosProjets
