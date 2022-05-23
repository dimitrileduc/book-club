import React, {useRef} from 'react'
import {useEffect, useState} from 'react'
import {Panel, P, Em, CloseWrapper, BG} from './styles'
import {Close} from '../../styles'

import Book from '../Book'
import BookDetails from '../BookDetails'
import BookEdit from '../BookEdit'
import BookAdd from '../BookAdd'

const DetailPanel = ({
  book,
  closePanel,
  state,
  bookViewType,
  selectedBookId,
  setLoading,
  setError,
  setData,
  notify,
}) => {
  const panelEl = useRef(null)
  const prevBook = useRef(null)

  useEffect(() => {
    if (prevBook.current !== book) {
      panelEl.current.scrollTop = 0
    }
    prevBook.current = book
  }, [book, prevBook])

  console.log('OKK VIEW TYPE ' + bookViewType)
  let panelTypeView
  switch (bookViewType) {
    case 'edit':
      panelTypeView = (
        <BookEdit
          book={book}
          selectedBookId={selectedBookId}
          setLoading={setLoading}
          setError={setError}
          setData={setData}
          closePanel={closePanel}
          notify={notify}
        />
      )
      break
    case 'read':
      panelTypeView = <BookDetails book={book} />
      break
    case 'add':
      panelTypeView = (
        <BookAdd
          book={book}
          setLoading={setLoading}
          setError={setError}
          setData={setData}
          notify={notify}
          closePanel={closePanel}
        />
      )
      break
    default:
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
