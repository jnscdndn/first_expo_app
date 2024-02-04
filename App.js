import React from "react";
import { SafeAreaView, ScrollView } from 'react-native'
import FlatCard from "./components/FlatCard";
import ScroolCards from "./components/ScroolCards";
import FancyCard from "./components/FancyCard";
import ActionCards from "./components/ActionCards";
import ContactList from "./components/ContactList";

const App=()=>{
  return(
    <SafeAreaView>
      <ScrollView>
         <FlatCard />
        <ScroolCards />
        <FancyCard />
        <FancyCard/>
        <ActionCards/> 
        <ContactList/>
      </ScrollView>
    </SafeAreaView>
  )
}
export default App;