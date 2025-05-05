export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Қоғамдық мәселелерді оңай және жылдам хабарлаңыз
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Сынған шамдар, қоқыс үйінділері, инфрақұрылым проблемалары – бәрін бір
          жерден хабарлаңыз
        </p>
        <a
          href="/report"
          className="bg-white text-emerald-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          Мәселе хабарлау
        </a>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-orange-50 text-center">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h2 className="text-5xl font-bold text-emerald-600">1,274</h2>
            <p className="mt-2 text-gray-700">Шешілген мәселелер</p>
          </div>
          <div>
            <h2 className="text-5xl font-bold text-emerald-600">320</h2>
            <p className="mt-2 text-gray-700">Белсенді еріктілер</p>
          </div>
          <div>
            <h2 className="text-5xl font-bold text-emerald-600">24 сағат</h2>
            <p className="mt-2 text-gray-700">Орташа шешу уақыты</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Неге Joltap қолдану керек?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition border-t-4 border-emerald-500">
            <h3 className="text-xl font-semibold text-emerald-700 mb-2">
              Жылдам әрі оңай
            </h3>
            <p className="text-gray-600">
              Бір минуттың ішінде мәселе туралы хабарлаңыз – еш қиындықсыз.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition border-t-4 border-orange-400">
            <h3 className="text-xl font-semibold text-orange-600 mb-2">
              Қауымдастықпен байланыста
            </h3>
            <p className="text-gray-600">
              Сіздің шағымдарыңыз тікелей тиісті органдарға немесе еріктілерге
              жіберіледі.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition border-t-4 border-teal-500">
            <h3 className="text-xl font-semibold text-teal-700 mb-2">
              Ашықтық
            </h3>
            <p className="text-gray-600">
              Хабарламаңыздың күйін тіркелген сәттен бастап шешілгенге дейін
              бақылаңыз.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 px-4 md:px-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Image Placeholder */}
          <div className="w-full h-80 bg-gray-200 rounded-2xl shadow-lg overflow-hidden">
            <img
              src="/placeholder-image.jpg"
              alt="Қоғамдық мәселе бейнесі"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text Content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4 leading-tight">
              Халық үніне құлақ асатын мемлекетке қадам
            </h2>
            <p className="text-gray-600 text-lg mb-6">
              Біздің платформамыз — қоғамдағы өзекті мәселелерді билік пен
              еріктілерге жеткізудің ең тиімді жолы. Жолдар, жарық, қауіпсіздік,
              және өзге де сұрақтар — бәрі ескерусіз қалмайды.
            </p>
            <button className="bg-emerald-600 text-white px-6 py-3 rounded-xl shadow hover:bg-emerald-700 transition-all duration-200">
              Мәселе туралы хабарлау
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
