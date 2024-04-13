import React from 'react'
import Signup from './components/Signup'
import AvatarUploadComponent from './components/AvatarUploadComponent'
import DribbbleOnboardingComponent from './components/DribbbleOnboardingComponent'
import VerifyEmail from './components/VerifyEmail'
import { BrowserRouter, Routes , Route } from 'react-router-dom'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Signup/>}/>
      <Route path="/AvatarUploadComponent" element={<AvatarUploadComponent/>}/>
      <Route path="/DribbbleOnboardingComponent" element={<DribbbleOnboardingComponent/>}/>
      <Route path="/VerifyEmail" element={<VerifyEmail/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App