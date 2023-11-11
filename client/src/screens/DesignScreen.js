import React, { useRef, useState } from 'react'
import './designscreen.css'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addToCartCustom } from '../actions/cartActions'
import { useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap'
const upperList = [
  {
    shoeName: 'Shoe 1',
    imageLink:
      'https://firebasestorage.googleapis.com/v0/b/offer-me-f2528.appspot.com/o/3d%2Fshoe%201-05.jpg?alt=media&token=83d5a029-5e82-4a3f-a897-dd31b4f05186',
  },
  {
    shoeName: 'Shoe 2',
    imageLink:
      'https://firebasestorage.googleapis.com/v0/b/offer-me-f2528.appspot.com/o/3d%2Fshoe%202-02.jpg?alt=media&token=18652b46-bc6a-4479-a600-2f3f0bc95d00',
  },
  {
    shoeName: 'Shoe 3',
    imageLink:
      'https://firebasestorage.googleapis.com/v0/b/offer-me-f2528.appspot.com/o/3d%2Fshoe%203-02.jpg?alt=media&token=6fe3fe8b-0622-4698-9a1d-4423b4ca506b',
  },
  {
    shoeName: 'Shoe 4',
    imageLink:
      'https://firebasestorage.googleapis.com/v0/b/offer-me-f2528.appspot.com/o/3d%2Fshoe%204-02.jpg?alt=media&token=e40110c6-7ff3-4b36-b3d0-b1fba8a3a65a',
  },
  {
    shoeName: 'Shoe 5',
    imageLink:
      'https://firebasestorage.googleapis.com/v0/b/offer-me-f2528.appspot.com/o/3d%2Fshoe%205-02.jpg?alt=media&token=78443dab-1d32-4815-9233-4495caa0934d',
  },
  {
    shoeName: 'Shoe 6',
    imageLink:
      'https://firebasestorage.googleapis.com/v0/b/offer-me-f2528.appspot.com/o/3d%2Fshoe%206-02.jpg?alt=media&token=3903042c-039b-4262-af58-cea104bf4efa',
  },
]
const lowerList = [
  {
    shoeName: 'Shoe 1',
    imageLink:
      'https://firebasestorage.googleapis.com/v0/b/offer-me-f2528.appspot.com/o/3d%2Fshoe%201-03.jpg?alt=media&token=3fcbff03-3471-4013-9794-7deaa4ce4d57',
  },
  {
    shoeName: 'Shoe 2',
    imageLink:
      'https://firebasestorage.googleapis.com/v0/b/offer-me-f2528.appspot.com/o/3d%2Fshoe%202-06.jpg?alt=media&token=3d964e15-ddde-4106-a264-4676eba0f672',
  },
  {
    shoeName: 'Shoe 3',
    imageLink:
      'https://firebasestorage.googleapis.com/v0/b/offer-me-f2528.appspot.com/o/3d%2Fshoe%203-06.jpg?alt=media&token=75b61b4e-b0bd-49bb-b9a7-ea0020ab7d44',
  },
  {
    shoeName: 'Shoe 4',
    imageLink:
      'https://firebasestorage.googleapis.com/v0/b/offer-me-f2528.appspot.com/o/3d%2Fshoe%204-06.jpg?alt=media&token=db78488f-726e-4ac8-9c5e-9a3fdc92aff5',
  },
  {
    shoeName: 'Shoe 5',
    imageLink:
      'https://firebasestorage.googleapis.com/v0/b/offer-me-f2528.appspot.com/o/3d%2Fshoe%205-06.jpg?alt=media&token=f1346675-d790-47a1-a3a7-730a9a9a5e7d',
  },
  {
    shoeName: 'Shoe 6',
    imageLink:
      'https://firebasestorage.googleapis.com/v0/b/offer-me-f2528.appspot.com/o/3d%2Fshoe%206-06.jpg?alt=media&token=200dea1b-553f-408c-bf9c-24f2077a00a0',
  },
]
const models = [
  {
    color: 'brown',
    id: '64d4e7894cb9a0718cf54196',
    shoeName: 'Custom Women Heel',
    topName: 'Shoe 1',
    bottomName: 'Shoe 1',
    price: 2300,
    modelLink:
      'https://sketchfab.com/models/ec14c92aae6f4bcf8e49ef1180062315/embed?camera=0&ui_animations=0&ui_infos=0&ui_stop=0&ui_inspector=0&ui_hint=0&ui_ar=0&ui_help=0&ui_settings=0&ui_vr=0&ui_fullscreen=0&ui_annotations=0&ui_watermark_link=0',
    imageLink:
      'https://firebasestorage.googleapis.com/v0/b/offer-me-f2528.appspot.com/o/3d%2Fshoe%201-04.jpg?alt=media&token=97fe4007-1d18-4be5-8112-253baafe6926',
  },
  {
    color: 'brown',
    id: '64d4e7894cb9a0718cf54197',
    shoeName: 'Brown Unisex Sandals',
    topName: 'Shoe 2',
    bottomName: 'Shoe 2',
    price: 2300,
    modelLink:
      'https://sketchfab.com/models/64df990914f84a5ab847183a299b33bc/embed?camera=0&ui_animations=0&ui_infos=0&ui_stop=0&ui_inspector=0&ui_hint=0&ui_ar=0&ui_help=0&ui_settings=0&ui_vr=0&ui_fullscreen=0&ui_annotations=0',
    imageLink:
      'https://firebasestorage.googleapis.com/v0/b/offer-me-f2528.appspot.com/o/3d%2Fshoe%202-01.jpg?alt=media&token=d00f3cec-bab0-4aef-a4f3-874e93384dc5',
  },
  {
    color: 'brown',
    id: '64d4e7894cb9a0718cf54199',
    shoeName: 'Brown women stylish heels',
    topName: 'Shoe 3',
    bottomName: 'Shoe 3',
    price: 3999,
    modelLink:
      'https://sketchfab.com/models/dc79e84850cb4b9d958721b0c1882259/embed?camera=0&ui_animations=0&ui_infos=0&ui_stop=0&ui_inspector=0&ui_hint=0&ui_ar=0&ui_help=0&ui_settings=0&ui_vr=0&ui_fullscreen=0&ui_annotations=0',
    imageLink:
      'https://firebasestorage.googleapis.com/v0/b/offer-me-f2528.appspot.com/o/3d%2Fshoe%203-01.jpg?alt=media&token=c6fe537b-23dd-4cf9-a63b-4e6665459ad4',
  },
  {
    color: 'brown',
    id: '64d4e7894cb9a0718cf54111',
    shoeName: 'Brown Unisex activewear Sandals',
    topName: 'Shoe 4',
    bottomName: 'Shoe 4',
    price: 2879,
    modelLink:
      'https://sketchfab.com/models/22d076dde02f43998bec18370033191d/embed?camera=0&ui_animations=0&ui_infos=0&ui_stop=0&ui_inspector=0&ui_hint=0&ui_ar=0&ui_help=0&ui_settings=0&ui_vr=0&ui_fullscreen=0&ui_annotations=0',
    imageLink:
      'https://firebasestorage.googleapis.com/v0/b/offer-me-f2528.appspot.com/o/3d%2Fshoe%204-01.jpg?alt=media&token=4ed9020a-4449-475f-bca1-0074e08bef65',
  },
  {
    color: 'brown',
    id: '64d4e7894cb9a0718cf54166',
    shoeName: 'Brown women open toe sandals',
    topName: 'Shoe 5',
    bottomName: 'Shoe 5',
    price: 5999,
    modelLink:
      'https://sketchfab.com/models/dbd9bd82291e42359ffcbaf3f3e39310/embed?camera=0&ui_animations=0&ui_infos=0&ui_stop=0&ui_inspector=0&ui_hint=0&ui_ar=0&ui_help=0&ui_settings=0&ui_vr=0&ui_fullscreen=0&ui_annotations=0',
    imageLink:
      'https://firebasestorage.googleapis.com/v0/b/offer-me-f2528.appspot.com/o/3d%2Fshoe%205-01.jpg?alt=media&token=dfe993ed-1010-4411-9673-30761128a9a8',
  },
]
export function DesignScreen(props) {
  const [gender, setGender] = useState('male')
  const [upperItem, selectUpperItem] = useState(false)
  const [lowerItem, selectLowerItem] = useState(false)
  const [model, setModel] = useState(null)
  const [price, setPrice] = useState(0)
  const [width, setWidth] = useState('wide')
  const [size, setSize] = useState(40)
  const [material, setMaterial] = useState('leather')
  const [color, setColor] = useState('brown')
  const [count, setCount] = useState(1)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const upperScroll = useRef(null)
  const lowerScroll = useRef(null)

  const updatePrice = () => {
    let newPrice = 0
    if (model) {
      newPrice = model.price
      let sizeAddOn = (size - 36) * 0.01 * price
      let widthAddOn = 0
      if (width === 'wide') {
        widthAddOn = 0.05 * price
      }
      let materialAddOn = 0
      if (material === 'leather') {
        materialAddOn = 0.1 * price
      } else if (material === 'fabric') {
        materialAddOn = 0.05 * price
      }
      newPrice = newPrice + sizeAddOn + widthAddOn + materialAddOn
    }
    console.log('updating price')
    setPrice(newPrice)
  }

  const updateModel = () => {
    let modelList = models.filter((item, index) => {
      if (
        item.topName === upperItem &&
        item.bottomName === lowerItem &&
        item.color === color
      ) {
        return item
      }
    })
    setModel(modelList[0])
    console.log(upperItem, lowerItem)
    console.log(modelList)
  }
  useEffect(() => {
    updateModel()
    updatePrice()
  }, [upperItem, lowerItem, price, material, size, width, color, model])

  return (
    <>
      <h2 className='text-center pt-5 font-popins collect heading-color'>
        Customize your own footware & 3D view
      </h2>
      <div className='' style={{ display: 'flex', justifyContent: 'center' }}>
        <form
          className='shadow-lg p-4 m-5 bg-body-tertiary rounded'
          style={{ width: '500px' }}
        >
          <h2 className='text-center py-2 collect heading-color'>
            Select your Favourite
          </h2>
          <label className='py-2'>Select the Gender</label>
          <select
            className='form-select'
            value={gender}
            onChange={(e) => {
              setGender(e.target.value)
            }}
          >
            <option selected value={'male'}>
              Male
            </option>
            <option value={'female'}>Female</option>
          </select>
          <label className='py-2'>Select the Width</label>
          <select
            className='form-select'
            onChange={(e) => {
              setWidth(e.target.value)
              updatePrice()
            }}
            value={width}
          >
            <option value={'wide'}>Wide</option>
            <option value={'narrow'}>Narrow</option>
          </select>
          <label className='py-2'>Select the Size</label>
          <select
            className='form-select'
            onChange={(e) => {
              setSize(e.target.value)
            }}
            value={size}
          >
            <option value={36}>36</option>
            <option value={37}>37</option>
            <option value={38}>38</option>
            <option value={39}>39</option>
            <option value={40}>40</option>
            <option value={41}>41</option>
            <option value={42}>42</option>
            <option value={43}>43</option>
            <option value={44}>44</option>
            <option value={45}>45</option>
            <option value={46}>46</option>
            <option value={47}>47</option>
          </select>
          <label className='py-2'>Select the Material</label>
          <select
            className='form-select'
            onChange={(e) => {
              setMaterial(e.target.value)
            }}
            value={material}
          >
            <option value={'leather'}>Leather</option>
            <option value={'synthetic'}>Synthetic</option>
            <option value={'fabric'}>Fabric</option>
          </select>
          <label className='py-2'>Select the Gender</label>
          <div>
            <input
              type='radio'
              checked={color === 'brown'}
              onChange={(e) => {
                setColor(e.target.value)
              }}
              value='brown'
              name='color'
            />
            <span> Brown</span>
            <input
              className='mx-2'
              type='radio'
              checked={color === 'black'}
              value='black'
              name='color'
              onChange={(e) => {
                setColor(e.target.value)
              }}
            />
            <span>Black</span>
          </div>
        </form>
      </div>

      {/* Previous Code */}
      <div
        className=' font-popins'
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'start',
          flexDirection: 'column',
          width: '100%',
        }}
      >
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          {/* <div class='container text-center font-popins py-3'>
            <div class='row flex justify-content-center align-itmes-center'>
              <div class='col-md-3 col-lg-3 col-sm-6 py-4'>
                <div>
                  Gender :{' '}
                  <select
                    style={{
                      width: '150px',
                      textAlign: 'center',
                      border: '1px solid #A9A9A9',
                      borderRadius: '5px',
                      padding: '4px',
                      fontSize: '15px',
                    }}
                    value={gender}
                    onChange={(e) => {
                      setGender(e.target.value)
                    }}
                  >
                    <option selected value={'male'}>
                      Male
                    </option>
                    <option value={'female'}>Female</option>
                  </select>
                </div>
              </div>
              <div class='col-md-3 col-lg-3 col-sm-6 py-4'>
                <div>
                  Width :{' '}
                  <select
                    style={{
                      width: '150px',
                      textAlign: 'center',
                      border: '1px solid #A9A9A9',
                      borderRadius: '5px',
                      padding: '4px',
                      fontSize: '15px',
                    }}
                    onChange={(e) => {
                      setWidth(e.target.value)
                      updatePrice()
                    }}
                    value={width}
                  >
                    <option value={'wide'}>Wide</option>
                    <option value={'narrow'}>Narrow</option>
                  </select>
                </div>
              </div>
              <div class='col-md-3 col-lg-3 col-sm-6 py-4'>
                <div>
                  Size :{' '}
                  <select
                    style={{
                      width: '150px',
                      textAlign: 'center',
                      border: '1px solid #A9A9A9',
                      borderRadius: '5px',
                      padding: '4px',
                      fontSize: '15px',
                    }}
                    onChange={(e) => {
                      setSize(e.target.value)
                    }}
                    value={size}
                  >
                    <option value={36}>36</option>
                    <option value={37}>37</option>
                    <option value={38}>38</option>
                    <option value={39}>39</option>
                    <option value={40}>40</option>
                    <option value={41}>41</option>
                    <option value={42}>42</option>
                    <option value={43}>43</option>
                    <option value={44}>44</option>
                    <option value={45}>45</option>
                    <option value={46}>46</option>
                    <option value={47}>47</option>
                  </select>
                </div>
              </div>
              <div class='col-md-3 col-lg-3 col-sm-6 py-4'>
                <div>
                  Material :{' '}
                  <select
                    style={{
                      width: '150px',
                      textAlign: 'center',
                      border: '1px solid #A9A9A9',
                      borderRadius: '5px',
                      padding: '4px',
                      fontSize: '15px',
                    }}
                    onChange={(e) => {
                      setMaterial(e.target.value)
                    }}
                    value={material}
                  >
                    <option value={'leather'}>Leather</option>
                    <option value={'synthetic'}>Synthetic</option>
                    <option value={'fabric'}>Fabric</option>
                  </select>
                </div>
              </div>
            </div>
            <div className='row  flex justify-content-center align-itmes-center'>
              <div class='col-md-3 col-lg-4 col-sm-6 mt-5'>
                <div>
                  Color :{' '}
                  <input
                    type='radio'
                    checked={color === 'brown'}
                    onChange={(e) => {
                      setColor(e.target.value)
                    }}
                    value='brown'
                    name='color'
                  />
                  Brown
                  <input
                    type='radio'
                    checked={color === 'black'}
                    value='black'
                    name='color'
                    onChange={(e) => {
                      setColor(e.target.value)
                    }}
                  />
                  Black
                </div>
              </div>
            </div>
          </div> */}

          {/* <div
            style={{
              width: '50%',
              display: 'flex',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              marginTop: '50px',
              marginBottom: '25px',
              flexDirection: 'row',
            }}
          ></div>
          <div
            style={{
              width: '50%',
              display: 'flex',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              flexDirection: 'row',
              marginBottom: '25px',
            }}
          ></div> */}

          <div className='scroll-pane'>
            <button className='scroll-button left-scroll'>
              <i
                class='fas fa-chevron-left'
                style={{
                  position: 'absolute',
                }}
                onClick={() => {
                  const scrollLeft = upperScroll.current.scrollLeft - 200
                  upperScroll.current.scrollTo({
                    left: scrollLeft,
                    behavior: 'smooth', // This makes the scroll smooth
                  })
                }}
              ></i>
            </button>
            <div
              ref={upperScroll}
              style={{
                width: '80%',
                display: 'flex',
                flexDirection: 'row',
                overflowX: 'scroll',
                height: '100%',
              }}
            >
              {upperList.map((item, index) => {
                return (
                  <div
                    className={`part-setter ${
                      upperItem === item.shoeName ? 'seleceted-item' : ''
                    }`}
                    onClick={() => {
                      selectUpperItem(item.shoeName)
                    }}
                  >
                    <img
                      src={item.imageLink}
                      className={`selecter-image`}
                      alt=''
                    />
                    {upperItem === item.shoeName && (
                      <div
                        style={{
                          position: 'absolute',
                          width: '100%',
                          height: '100%',
                          backgroundColor: 'rgba(0,0,0,0.3)',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}
                      >
                        <i
                          class='fas fa-check'
                          style={{
                            color: 'white',
                            position: 'absolute',
                            fontSize: '70px',
                          }}
                        ></i>
                      </div>
                    )}
                    <p>{item.shoeName}</p>
                  </div>
                )
              })}
            </div>
            <button className='scroll-button right-scroll'>
              <i
                class='fas fa-chevron-right'
                style={{
                  position: 'absolute',
                }}
                onClick={() => {
                  const scrollLeft = upperScroll.current.scrollLeft + 200
                  upperScroll.current.scrollTo({
                    left: scrollLeft,
                    behavior: 'smooth', // This makes the scroll smooth
                  })
                }}
              ></i>
            </button>
          </div>
          <div className='scroll-pane'>
            <button className='scroll-button left-scroll'>
              <i
                class='fas fa-chevron-left'
                style={{
                  position: 'absolute',
                }}
                onClick={() => {
                  const scrollLeft = lowerScroll.current.scrollLeft - 200
                  lowerScroll.current.scrollTo({
                    left: scrollLeft,
                    behavior: 'smooth', // This makes the scroll smooth
                  })
                }}
              ></i>
            </button>
            <div
              ref={lowerScroll}
              style={{
                width: '80%',
                display: 'flex',
                flexDirection: 'row',
                overflowX: 'scroll',
                height: '100%',
              }}
            >
              {lowerList.map((item, index) => {
                return (
                  <div
                    className={`part-setter ${
                      lowerItem === item.shoeName ? 'seleceted-item' : ''
                    }`}
                    onClick={() => {
                      selectLowerItem(item.shoeName)
                    }}
                  >
                    <img
                      src={item.imageLink}
                      className={`selecter-image`}
                      alt=''
                    />
                    {lowerItem === item.shoeName && (
                      <div
                        style={{
                          position: 'absolute',
                          width: '100%',
                          height: '100%',
                          backgroundColor: 'rgba(0,0,0,0.3)',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}
                      >
                        <i
                          class='fas fa-check'
                          style={{
                            color: 'white',
                            position: 'absolute',
                            fontSize: '70px',
                          }}
                        ></i>
                      </div>
                    )}
                    <p>{item.shoeName}</p>
                  </div>
                )
              })}
            </div>
            <button className='scroll-button right-scroll'>
              <i
                class='fas fa-chevron-right'
                style={{
                  position: 'absolute',
                }}
                onClick={() => {
                  const scrollLeft = lowerScroll.current.scrollLeft + 200
                  lowerScroll.current.scrollTo({
                    left: scrollLeft,
                    behavior: 'smooth', // This makes the scroll smooth
                  })
                }}
              ></i>
            </button>
          </div>

          <div className=''>
            <div class='container text-center'>
              <div class='row'>
                <div class='col'>
                  <div>
                    {model && (
                      <div className='py-5'>
                        <h2 className='collect heading-color py-3'>
                          Your Customize 3D Model
                        </h2>
                        <iframe
                          className='modelSize'
                          title='Heel Sandal OBJ'
                          frameborder='0'
                          allowfullscreen
                          mozallowfullscreen='true'
                          webkitallowfullscreen='true'
                          allow='autoplay; fullscreen; xr-spatial-tracking'
                          xr-spatial-tracking
                          execution-while-out-of-viewport
                          execution-while-not-rendered
                          web-share
                          src={model.modelLink}
                        ></iframe>
                      </div>
                    )}
                    {!model && (
                      <div
                        class='py-5 my-5 text-center'
                        style={{
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}
                      >
                        <span className='warning-span'>
                          Your Customize Model is Unavailable!
                        </span>
                      </div>
                    )}
                    {/* <div class="sketchfab-embed-wrapper"> <iframe title="SS'22 - BWM00030 - 75 MM PLATFORM" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share width="640" height="480" src="https://sketchfab.com/models/dc79e84850cb4b9d958721b0c1882259/embed?camera=0&ui_animations=0&ui_infos=0&ui_stop=0&ui_inspector=0&ui_ar=0&ui_help=0&ui_settings=0&ui_vr=0&ui_fullscreen=0&ui_annotations=0"> </iframe> </div>          */}
                  </div>
                </div>
              </div>

              <div className='row py-5'>
                <div class='col'>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                    }}
                  >
                    {/* <Button
                      disabled={model == null}
                      className='btn-block my-2'
                      style={{
                        backgroundImage:
                          'linear-gradient(to bottom right,#79db58,#036920,#79db58)',
                        color: 'white',
                        fontWeight: '600',
                      }}
                      onClick={() => {
                        updatePrice()
                      }}
                    >
                      Calculate Price
                    </Button> */}

                    <span className='price-slot collect py-2'>
                      Price : LKR. {price.toFixed(2)}
                    </span>

                    <div className='my-2'>
                      <span>Quantity : </span>
                      <input
                        type='number'
                        min={1}
                        onChange={(e) => {
                          setCount(e.target.value)
                        }}
                        value={count}
                        className='quantity-input'
                        placeholder='Quantity'
                      />
                    </div>

                    <div>
                      <Button
                        onClick={() => {
                          if (model) {
                            dispatch(
                              addToCartCustom(
                                model.id,
                                model.shoeName,
                                model.imageLink,
                                price.toFixed(2),
                                size,
                                count
                              )
                            )
                            navigate('/cart')
                          }
                        }}
                        className='btn-block py-2'
                        type='button'
                        disabled={count <= 0 || model == null}
                        style={{
                          backgroundImage:
                            'linear-gradient(to bottom right,#50025c, #d20be0,#db3bb6)',
                          color: 'white',
                          fontWeight: '600',
                          width: '200px',
                          float: 'center',
                        }}
                      >
                        Add To Cart
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
