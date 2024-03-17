import Single_Review_Card from "./Single_Review_Card/Single_Review_Card"


const REview_Card_Section = () => {
  return (
  <>
  <section>


    <div className="container mx-auto py-24 ">
       <div className="text-center mb-10"> <h2>CUSTOMER REVIEW</h2>
        <h1 className="text-5xl font-bold"> Listen to what our customers say</h1></div>
        <div className=" grid grid-cols-3 gap-5 gap-y-10">
<Single_Review_Card name='Charlie Leuschke' description={'All good, you guys guided me through every step of the process.'} />
<Single_Review_Card name='Luke Glover' description={'They went above and beyond to ensure that my smart home setup met all of my needs and exceeded my expectations.'} />
<Single_Review_Card name='Roderick Schumm' description={'You understand easily the things that I needed. So far Im satisfied.'} />
<Single_Review_Card name='Brandi Boyle' description={'The peace of mind knowing that my home is protected and efficient is priceless.'} />
<Single_Review_Card name='Scott Runolfsdottir' description={'Their recommendations for smart thermostats and lighting control have significantly reduced my energy bills while enhancing my comfort.'} />
<Single_Review_Card name='Claire Witting' description={'Thanks to Smart Home People, I can now enjoy more free time and less stress.'} />
        </div>
    </div>
  </section>
  </>
  )
}

export default REview_Card_Section