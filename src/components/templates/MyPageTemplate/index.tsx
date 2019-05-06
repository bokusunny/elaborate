import React, { Fragment } from 'react'
import { FirebaseSnapShot } from '../../../utils/firebase'
import Header from '../../molecules/Header'
import MyPageList from '../../organisms/MyPageList'
import { ReduxAPIStruct } from '../../../reducers/static-types'
import * as styles from './style.css'

interface Props {
  currentUser: firebase.User
  directories: ReduxAPIStruct<FirebaseSnapShot[]>
  branches: ReduxAPIStruct<FirebaseSnapShot[]>
  selectedDirectoryId: string | undefined
}

const MyPageTemplate: React.FC<Props> = ({
  currentUser,
  directories,
  branches,
  selectedDirectoryId,
}) => {
  // TODO: branchesのstatusがdefaultの時はBranchListを渡さないで、ディレクトリが選択されていませんみたいなUIを組む
  return (
    <Fragment>
      <Header colorType="whiteBase" />
      <div className={styles.container}>
        <MyPageList
          currentUser={currentUser}
          directories={directories}
          branches={branches}
          selectedDirectoryId={selectedDirectoryId}
        />
      </div>
    </Fragment>
  )
}

export default MyPageTemplate
