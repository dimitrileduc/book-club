import React, {useRef} from 'react'
import {useEffect, useState} from 'react'
import {Panel, P, Em, CloseWrapper, BG} from './styles'
import {Close} from '../../styles'

import Book from '../Book'
import BookDetails from '../BookDetails'
import BookEdit from '../BookEdit'

const DetailPanel = ({book, closePanel, state, bookIsInEditMode}) => {
  const panelEl = useRef(null)
  const prevBook = useRef(null)

  useEffect(() => {
    if (prevBook.current !== book) {
      panelEl.current.scrollTop = 0
    }
    prevBook.current = book
  }, [book, prevBook])

  console.log(state)
  let panelTypeView
  if (bookIsInEditMode) {
    panelTypeView = <BookEdit book={book} />
  } else {
    panelTypeView = <BookDetails book={book} />
  }

  return (
    <>
      <BG onClick={closePanel} $state={state} />
      <Panel $state={state} ref={panelEl}>
        <CloseWrapper onClick={closePanel} $state={state}>
          <Close />
        </CloseWrapper>

        {panelTypeView}
      </Panel>
    </>
  )
}

export default DetailPanel
