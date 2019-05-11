import React from 'react'
import * as H from 'history'
import { FirebaseSnapShot } from '../../../utils/firebase'
import DirectoryForm from '../../molecules/Forms/DirectoryForm'
import DirectoryList from '../../molecules/Lists/DirectoryList'
import BranchList from '../../molecules/Lists/BranchList'
import { ReduxAPIStruct } from '../../../common/static-types/api-struct'
import * as styles from './style.css'

interface Props {
  directories: ReduxAPIStruct<FirebaseSnapShot[]>
  branches: ReduxAPIStruct<FirebaseSnapShot[]>
  currentUser: firebase.User
  selectedDirectoryId: string | null
  history: H.History
}

const MyPageList: React.FC<Props> = ({
  directories,
  branches,
  currentUser,
  selectedDirectoryId,
  history,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.directoryList}>
        <h2>Directories</h2>
        <DirectoryForm currentUser={currentUser} />
        <DirectoryList directories={directories} currentUser={currentUser} />
      </div>
      <div className={styles.branchList}>
        <h2>Branches</h2>
        <BranchList
          branches={branches}
          currentUser={currentUser}
          selectedDirectoryId={selectedDirectoryId}
          history={history}
        />
      </div>
    </div>
  )
}
export default MyPageList
