import { Private, Router, Route, Set } from '@redwoodjs/router'
import PostsLayout from 'src/layouts/PostsLayout'
import CommonLayout from 'src/layouts/CommonLayout'
import DataBaseLayout from 'src/layouts/DataBaseLayout/DataBaseLayout'
import CardDetailLayout from './layouts/CardDetailsLayout/CardDetailsLayout'

const Routes = () => {
  return (
    <Router>
      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/signup" page={SignupPage} name="signup" />
      <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
      <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
      <Route path="/contact" page={ContactPage} name="contact" />
      <Private unauthenticated="home">
        <Set wrap={PostsLayout}>
          <Route path="/admin/posts/new" page={PostNewPostPage} name="newPost" />
          <Route path="/admin/posts/{id:Int}/edit" page={PostEditPostPage} name="editPost" />
          <Route path="/admin/posts/{id:Int}" page={PostPostPage} name="post" />
          <Route path="/admin/posts" page={PostPostsPage} name="posts" />
        </Set>
      </Private>
      <Set wrap={CommonLayout}>
        <Route path="/" page={HomePage} name="home" />
        <Route path="/blog" page={BlogPage} name="blog" />
        <Route path="/article/{id:Int}" page={ArticlePage} name="article" />
      </Set>
      <Set wrap={DataBaseLayout}>
        <Route path="/fishs-page" page={FishsPagePage} name="fishsPage" />
        <Route path="/sea-creatures" page={SeaCreaturesPage} name="seaCreatures" />
        <Route path="/bugs" page={BugsPage} name="bugs" />
        <Route path="/villagers" page={VillagersPage} name="villagers" />
        <Route path="/songs" page={SongsPage} name="songs" />
        <Route path="/arts" page={ArtsPage} name="arts" />
        <Route path="/houseware" page={HousewarePage} name="houseware" />
        <Route path="/papers" page={PapersPage} name="papers" />
        <Route path="/misc" page={MiscPage} name="misc" />
      </Set>
      <Set wrap={CardDetailLayout}>
        <Route path="/details/{id}" page={DetailsPage} name="details" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
