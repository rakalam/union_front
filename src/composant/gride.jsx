<div className='grid grid-cols-9 overflow-x-scroll gap-x-1 gap-y-2 md:overflow-hidden'>
   
  
    <div className='flex flex-col items-center justify-center pb-1 space-y-2 font-bold rounded bg-gray-50'>
        <font className="pt-1 text-[12px]">Mardi</font>
        <font className="flex flex-col items-center justify-center w-6 h-6 mb-1 space-y-4 text-white rounded-full bg-bleue_union_500">
            2
        </font>
    </div>
    <div className='flex flex-col items-center justify-center pb-1 space-y-2 font-bold rounded bg-gray-50'>
        <font className="pt-1 text-[12px]">Mercredi</font>
        <font className="flex flex-col items-center justify-center w-6 h-6 mb-1 space-y-4 text-white rounded-full bg-bleue_union_500">
            3
        </font>
    </div>
    <div className='flex flex-col items-center justify-center pb-1 space-y-2 font-bold rounded bg-gray-50'>
        <font className="pt-1 text-[12px]">Jeudi</font>
        <font className="flex flex-col items-center justify-center w-6 h-6 mb-1 space-y-4 text-white rounded-full bg-bleue_union_500">
            4
        </font>
    </div>
    <div className='flex flex-col items-center justify-center pb-1 space-y-2 font-bold rounded bg-gray-50'>
        <font className="pt-1 text-[12px]">Vendredi</font>
        <font className="flex flex-col items-center justify-center w-6 h-6 mb-1 space-y-4 text-white rounded-full bg-bleue_union_500">
            5
        </font>
    </div>
    <div className='flex flex-col items-center justify-center pb-1 space-y-2 font-bold rounded bg-gray-50'>
        <font className="pt-1 text-[12px]">Samedi</font>
        <font className="flex flex-col items-center justify-center w-6 h-6 mb-1 space-y-4 text-white rounded-full bg-bleue_union_500">
            6
        </font>
    </div>
    <div className='flex flex-col items-center justify-center pb-1 space-y-2 font-bold rounded bg-gray-50'>
        <font className="pt-1 text-[12px]">Dimanche</font>
        <font className="flex flex-col items-center justify-center w-6 h-6 mb-1 space-y-4 text-white rounded-full bg-bleue_union_500">
            7
        </font>
    </div>

    <div className='flex items-center justify-center pb-1 space-y-2 font-bold rounded bg-gray-50'>
        Action
    </div>

    {/* manomboka eto ny map  */}

    <div className='flex items-center justify-between px-3 py-1 bg-gray-100 rounded'>
        <div className='w-8 border-[2px] h-8 rounded-full font-bold text-white bg-orange-300 border-orange_union flex items-center justify-center px-2 py-2'>
            HB
        </div>
        <div className='flex flex-col items-center justify-center -space-y-1'>
            <font>U-8</font>
            <p className='text-[11px]'>Rakalam</p>
        </div>
    </div>

    <div className='flex flex-col items-center justify-center px-2 py-1 space-y-2 text-white rounded bg-bleue_union_500 '>

        <div className='flex items-center justify-between w-full text-[11px]'>
            <div> <FaClock /></div>
            <div> <FaSun /></div>
        </div>

        <div className='font-bold'>
            08:00 - 16:00
        </div>
    </div>

    <div className='flex flex-col items-center justify-center px-2 py-1 space-y-2 text-white rounded bg-bleue_union_500 '>
        <div className='flex items-center justify-between w-full text-[11px]'>
            <div> <FaClock /></div>
            <div> <FaSun /></div>
        </div>

        <div className='font-bold'>
            10:00 - 20:00
        </div>
    </div>

    <div className='flex flex-col items-center justify-center px-2 py-1 space-y-2 text-white bg-gray-900 rounded '>
        <div className='flex items-center justify-between w-full text-[11px]'>
            <div> <FaClock /></div>
            <div> <FaMoon /></div>
        </div>

        <div className='font-bold'>
            14:00 - 22:00
        </div>
    </div>

    <div className='flex flex-col items-center justify-center px-2 py-1 space-y-2 text-white bg-gray-900 rounded '>
        <div className='flex items-center justify-between w-full text-[11px]'>
            <div> <FaClock /></div>
            <div> <FaMoon /></div>
        </div>

        <div className='font-bold'>
            14:00 - 22:00
        </div>
    </div>

    <div className='flex items-center justify-center px-2 py-1 text-gray-900 bg-gray-100 rounded '>
        <font>OFF</font>
    </div>

    <div className='flex flex-col items-center justify-center px-2 py-1 space-y-2 text-white rounded bg-bleue_union_500 '>
        <div className='flex items-center justify-between w-full text-[11px]'>
            <div> <FaClock /></div>
            <div> <FaSun /></div>
        </div>

        <div className='font-bold'>
            10:00 - 20:00
        </div>
    </div>

    <div className='flex items-center justify-center px-2 py-1 text-gray-900 bg-gray-100 rounded '>
        <font>OFF</font>
    </div>

    <div className='flex items-center justify-center px-2 py-1 text-gray-900 bg-gray-100 rounded '>
        <font>OFF</font>
    </div>

    <hr className='h-[2px] bg-gray-400' />
    <hr className='h-[2px] bg-gray-400' />
    <hr className='h-[2px] bg-gray-400' />
    <hr className='h-[2px] bg-gray-400' />
    <hr className='h-[2px] bg-gray-400' />
    <hr className='h-[2px] bg-gray-400' />
    <hr className='h-[2px] bg-gray-400' />
    <hr className='h-[2px] bg-gray-400' />
    <hr className='h-[2px] bg-gray-400' />























    <form>
          {/* nom des personnels  */}
          <select name="" className='mb-4 tailwind-form'>
            <option disabled selected>seletionner presonnel</option>
            <option value="shift">Rakalam</option>
            <option value="OFF">Faneva</option>
            <option value="OFF">Dadaka</option>
          </select>

          <div className="grid grid-cols-4 gap-4 text-center">

            <font className="text-[12px]">Jour de la Semaine</font>
            <font className="text-[12px]">Type</font>
            <font className="text-[12px]">Heure Debut</font>
            <font className="text-[12px]">Heure Fin</font>
            

            {/* lundi  */}
            <div className='flex items-center justify-center bg-gray-100 rounded lg:space-x-4 lg:px-3 lg:justify-start '>
              <font className="items-center justify-center hidden w-6 h-6 mb-1 space-y-4 text-white rounded-full lg:flex bg-gradient-to-br from-jaune_union_500 via-orange_union_100 to-orange_union">1</font>
              <font>Lundi</font>
            </div>
            <select name="" className='tailwind-form' onChange={(e)=>(setSelectedOption(e.target.value))}>
              <option value="shift">Shift</option>
              <option value="OFF">OFF</option>
            </select>

            {
              selectedOption === 'shift' && (
                <>
                  <input type="time" name="" id="" className='tailwind-form' onChange={handleStartTimeChange} value={startTime}  />
                  <input type="time" name="" id="" className='tailwind-form' value={endTime} />
                </>
              )
            }


            {/* mardi  */}
            <div className='flex items-center justify-start px-3 space-x-4 bg-gray-100 rounded lg:justify-start'>
              <font className="items-center justify-center hidden w-6 h-6 mb-1 space-y-4 text-white rounded-full lg:flex bg-gradient-to-br from-jaune_union_500 via-orange_union_100 to-orange_union">2</font>
              <font>Mardi</font>
            </div>
            <select name="" className='tailwind-form'>
              <option value="shift">Shift</option>
              <option value="OFF">OFF</option>
            </select>

            <input type="time" name="" id="" className='tailwind-form' />
            <input type="time" name="" id="" className='tailwind-form' />


            {/* mercredi  */}
            <div className='flex items-center justify-center px-1 space-x-1 bg-gray-100 rounded lg:justify-start '>
              <font className="items-center justify-center hidden w-6 h-6 mb-1 space-y-4 text-white rounded-full bg-gradient-to-br from-jaune_union_500 via-orange_union_100 to-orange_union lg:flex">3</font>
              <font>Mercredi</font>
            </div>
            <select name="" className='tailwind-form'>
              <option value="shift">Shift</option>
              <option value="OFF">OFF</option>
            </select>

            <input type="time" name="" id="" className='tailwind-form' />
            <input type="time" name="" id="" className='tailwind-form' />


            {/* Jeudi  */}
            <div className='flex items-center justify-center bg-gray-100 rounded lg:space-x-4 lg:px-3 lg:justify-start '>
              <font className="items-center justify-center hidden w-6 h-6 mb-1 space-y-4 text-white rounded-full lg:flex bg-gradient-to-br from-jaune_union_500 via-orange_union_100 to-orange_union">4</font>
              <font>Jeudi</font>
            </div>
            <select name="" className='tailwind-form'>
              <option value="shift">Shift</option>
              <option value="OFF">OFF</option>
            </select>

            <input type="time" name="" id="" className='tailwind-form' />
            <input type="time" name="" id="" className='tailwind-form' />



            {/* vendredi  */}
            <div className='flex items-center justify-center bg-gray-100 rounded lg:space-x-4 lg:px-3 lg:justify-start '>
              <font className="items-center justify-center hidden w-6 h-6 mb-1 space-y-4 text-white rounded-full lg:flex bg-gradient-to-br from-jaune_union_500 via-orange_union_100 to-orange_union">5</font>
              <font>Vendredi</font>
            </div>
            <select name="" className='tailwind-form'>
              <option value="shift">Shift</option>
              <option value="OFF">OFF</option>
            </select>

            <input type="time" name="" id="" className='tailwind-form' />
            <input type="time" name="" id="" className='tailwind-form' />


            {/* samedi  */}
            <div className='flex items-center justify-center bg-gray-100 rounded lg:space-x-4 lg:px-3 lg:justify-start '>
              <font className="items-center justify-center hidden w-6 h-6 mb-1 space-y-4 text-white rounded-full lg:flex bg-gradient-to-br from-jaune_union_500 via-orange_union_100 to-orange_union">6</font>
              <font>Samedi</font>
            </div>
            <select name="" className='tailwind-form'>
              <option value="shift">Shift</option>
              <option value="OFF">OFF</option>
            </select>

            <input type="time" name="" id="" className='tailwind-form' />
            <input type="time" name="" id="" className='tailwind-form' />


            {/* dimanche  */}
            <div className='flex items-center justify-center bg-gray-100 rounded lg:space-x-4 lg:px-3 lg:justify-start '>
              <font className="items-center justify-center hidden w-6 h-6 mb-1 space-y-4 text-white rounded-full lg:flex bg-gradient-to-br from-jaune_union_500 via-orange_union_100 to-orange_union">7</font>
              <font>Dimanche</font>
            </div>
            <select name="" className='tailwind-form'>
              <option value="shift">Shift</option>
              <option value="OFF">OFF</option>
            </select>

            <input type="time" name="" id="" className='tailwind-form' />
            <input type="time" name="" id="" className='tailwind-form' />

          </div>
          <button className="flex items-center justify-center space-x-3 my-4 sm:text-[12px] text-[1em] px-2 py-1 bg-bleue_union_500 text-white rounded">
            <FaSave />
            <span className="text-[13px]">Enregistrer</span>
          </button>

        </form>





</div>


