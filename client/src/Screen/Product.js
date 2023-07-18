import { React } from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import MetaData from '../Components/MetaData'
// import { useDispatch, useSelector } from 'react-redux'
// import { getProducts } from '../Actions/productsActions'

const Product = () => {
  // //Dispatch
  // const dispatch = useDispatch()

  // //UseSelector
  // const { products, loading } = useSelector((state) => state.getProducts)

  // //Useeffect
  // useEffect(() => {
  //   dispatch(getProducts)
  // })

  return (
    <>
      <MetaData title={'Best Our Products'} />
      <h2 className=' font-popins font-semibold text-2xl text-center'>
        Products
      </h2>
      <div class='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 text-center py-8 place-items-center'>
        <div>
          <Card style={{ width: '18rem' }}>
            <Card.Img
              variant='top'
              src='https://images.unsplash.com/photo-1595341888016-a392ef81b7de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHNob2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
            />
            <Card.Body>
              <Card.Title>Brown Shoe</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant='primary'>Add Cart</Button>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card style={{ width: '18rem' }}>
            <Card.Img
              variant='top'
              src='https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
            />
            <Card.Body>
              <Card.Title>Red Shoe</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant='primary'>Add Cart</Button>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card style={{ width: '18rem' }}>
            <Card.Img
              variant='top'
              src='https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2hvZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
            />
            <Card.Body>
              <Card.Title>White Shoe</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant='primary'>Add Cart</Button>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card style={{ width: '18rem' }}>
            <Card.Img
              variant='top'
              src='https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNob2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
            />
            <Card.Body>
              <Card.Title>Orange Show</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant='primary'>Add Cart</Button>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card style={{ width: '18rem' }}>
            <Card.Img
              variant='top'
              src='https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHNob2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant='primary'>Add Cart</Button>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card style={{ width: '18rem' }}>
            <Card.Img
              variant='top'
              src='https://images.unsplash.com/photo-1465877783223-4eba513e27c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHNob2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant='primary'>Add Cart</Button>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card style={{ width: '18rem' }}>
            <Card.Img
              variant='top'
              src='https://images.unsplash.com/photo-1514989940723-e8e51635b782?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHNob2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant='primary'>Add Cart</Button>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card style={{ width: '18rem' }}>
            <Card.Img
              variant='top'
              src='https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHNob2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant='primary'>Add Cart</Button>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card style={{ width: '18rem' }}>
            <Card.Img
              variant='top'
              src='https://images.unsplash.com/photo-1494496195158-c3becb4f2475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHNob2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant='primary'>Add Cart</Button>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card style={{ width: '18rem' }}>
            <Card.Img
              variant='top'
              src='https://images.unsplash.com/photo-1604671801908-6f0c6a092c05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fHNob2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant='primary'>Add Cart</Button>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card style={{ width: '18rem' }}>
            <Card.Img
              variant='top'
              src='https://images.unsplash.com/photo-1449505278894-297fdb3edbc1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fHNob2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant='primary'>Add Cart</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  )
}

export default Product
