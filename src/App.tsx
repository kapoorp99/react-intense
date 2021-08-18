import { ReactElement } from 'react'
import { ContactUs, ErrorPage, Footer, Header, HomePage } from './lib';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { AppContainer } from './lib/components/styles/globalStyles';

function App(): ReactElement {
  const sidebar_options = [
    { title: 'home', route: '' },
    { title: 'contact us', route: '/contactus' },
  ]
  return (
    <BrowserRouter>
      <AppContainer>
        <Header
          heading='Make it quick'
          logoImg_src='https://ik.imagekit.io/q8qsfnr9wag/5796820ba0764c4390258d45017e6cd4__1__wx8bZI9qTtq.png?updatedAt=1628862027895'
          sidebar_options={sidebar_options} />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/contactus" exact component={ContactUs} />
          <Route path='*' exact render={() => <ErrorPage err_code='404' err_status='Page Not Found' />} />
        </Switch>
        <Footer
          heading='React Intense'
          logoImg_src='https://ik.imagekit.io/q8qsfnr9wag/5796820ba0764c4390258d45017e6cd4__1__wx8bZI9qTtq.png?updatedAt=1628862027895'
          github='https://www.github.com/kapoorp99'
          instagram='https://www.instagram.com/kapoorprakhar99/'
          linkedin='https://www.linkedin.com/in/kp99'
        />
      </AppContainer>
    </BrowserRouter>
  )
}

export default App
