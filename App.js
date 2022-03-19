// import React from 'react';
// import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
// import Navigation from './src/navigation';

// const App = () => {
//   return (
//     <SafeAreaProvider>
//       <SafeAreaView style={{flex: 1}}>
//         <Navigation />            
//       </SafeAreaView>  
//     </SafeAreaProvider>

//   );
// }

// export default App;


import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { NativeBaseProvider } from 'native-base';

import Navigation from './src/navigation';

const App = () => {
  return (
    <SafeAreaProvider >
      {/* <SafeAreaView style={{ flex: 1 }}> */}
        <NativeBaseProvider >
          <Navigation />
        </NativeBaseProvider>
      {/* </SafeAreaView> */}
    </SafeAreaProvider>

  );
}

export default App;