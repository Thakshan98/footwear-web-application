import Badge from 'react-bootstrap/Badge'
import ListGroup from 'react-bootstrap/ListGroup'
import { TbPlayerTrackNextFilled } from 'react-icons/tb'
import { NavLink } from 'react-router-dom'

function CategoryList() {
  return (
    <ListGroup as='ol' numbered className=' font-popins'>
      <ListGroup.Item
        as='li'
        className='d-flex justify-content-between align-items-start'
      >
        <div className='ms-2 me-auto'>
          <div className='fw-bold'>New Arrivals</div>
          Collection
        </div>
        <h5>
          <Badge bg='primary' pill>
            <NavLink to='/new-arrivals'>
              <TbPlayerTrackNextFilled className='text-white' />
            </NavLink>
          </Badge>
        </h5>
      </ListGroup.Item>
      <ListGroup.Item
        as='li'
        className='d-flex justify-content-between align-items-start'
      >
        <div className='ms-2 me-auto'>
          <div className='fw-bold'>Men</div>
          Collection
        </div>
        <h5>
          <Badge bg='primary' pill>
            <NavLink to='/men'>
              <TbPlayerTrackNextFilled className='text-white' />
            </NavLink>
          </Badge>
        </h5>
      </ListGroup.Item>
      <ListGroup.Item
        as='li'
        className='d-flex justify-content-between align-items-start'
      >
        <div className='ms-2 me-auto'>
          <div className='fw-bold'>Women</div>
          Collection
        </div>
        <h5>
          <Badge bg='primary' pill>
            <NavLink to='/women'>
              <TbPlayerTrackNextFilled className='text-white' />
            </NavLink>
          </Badge>
        </h5>
      </ListGroup.Item>
      <ListGroup.Item
        as='li'
        className='d-flex justify-content-between align-items-start'
      >
        <div className='ms-2 me-auto'>
          <div className='fw-bold'>Child</div>
          Collection
        </div>
        <h5>
          <Badge bg='primary' pill>
            <NavLink to='/child'>
              <TbPlayerTrackNextFilled className='text-white' />
            </NavLink>
          </Badge>
        </h5>
      </ListGroup.Item>
      <ListGroup.Item
        as='li'
        className='d-flex justify-content-between align-items-start'
      >
        <div className='ms-2 me-auto'>
          <div className='fw-bold'>Sold Out</div>
          Collection
        </div>
        <h5>
          <Badge bg='primary' pill>
            <NavLink to='/sold-out'>
              <TbPlayerTrackNextFilled className='text-white' />
            </NavLink>
          </Badge>
        </h5>
      </ListGroup.Item>
      <ListGroup.Item
        as='li'
        className='d-flex justify-content-between align-items-start'
      >
        <div className='ms-2 me-auto'>
          <div className='fw-bold'>Sold Out</div>
          Collection
        </div>
        <h5>
          <Badge bg='primary' pill>
            <NavLink to='/sold-out'>
              <TbPlayerTrackNextFilled className='text-white' />
            </NavLink>
          </Badge>
        </h5>
      </ListGroup.Item>
      <ListGroup.Item
        as='li'
        className='d-flex justify-content-between align-items-start'
      >
        <div className='ms-2 me-auto'>
          <div className='fw-bold'>Sold Out</div>
          Collection
        </div>
        <h5>
          <Badge bg='primary' pill>
            <NavLink to='/sold-out'>
              <TbPlayerTrackNextFilled className='text-white' />
            </NavLink>
          </Badge>
        </h5>
      </ListGroup.Item>
      <ListGroup.Item
        as='li'
        className='d-flex justify-content-between align-items-start'
      >
        <div className='ms-2 me-auto'>
          <div className='fw-bold'>Sold Out</div>
          Collection
        </div>
        <h5>
          <Badge bg='primary' pill>
            <NavLink to='/sold-out'>
              <TbPlayerTrackNextFilled className='text-white' />
            </NavLink>
          </Badge>
        </h5>
      </ListGroup.Item>
      <ListGroup.Item
        as='li'
        className='d-flex justify-content-between align-items-start'
      >
        <div className='ms-2 me-auto'>
          <div className='fw-bold'>Sold Out</div>
          Collection
        </div>
        <h5>
          <Badge bg='primary' pill>
            <NavLink to='/sold-out'>
              <TbPlayerTrackNextFilled className='text-white' />
            </NavLink>
          </Badge>
        </h5>
      </ListGroup.Item>
    </ListGroup>
  )
}

export default CategoryList
