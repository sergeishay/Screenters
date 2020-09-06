import React, { Fragment } from 'react'
import CreatorGrid from '../components/CreatorList/CreatorList'
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact'
import { inject, observer } from 'mobx-react'
import { useState } from 'react'

const Creators = inject('generalStore')(
    observer(props => {

        const [creatorsList, setCreatorsList] = useState(props.GeneralStore.AllCreators)
        const creatorsNames = props.generalStore.AllCreators.map(creator => creator.username)

        return (
            <Fragment>
                <div className='spacer'>&nbsp;</div>
                <MDBContainer>
                    <MDBRow>
                        <MDBCol md='10'>
                            <CreatorGrid
                                creatorNames={creatorsNames}
                                creatorList={creatorsList}
                            />
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </Fragment>
        )
    })
)

export default Creators
