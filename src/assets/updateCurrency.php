<?php  
 $message = '';  
 $errors = '';  
 header('Content-type: application/json');

//  if(isset($_POST["submit"]))  
//  {  
//       if(empty($_POST["name"]))  
//       {  
//         //    $error = "<label class='text-danger'>Enter Name</label>";  
//       }  
//       // else if(empty($_POST["gender"]))  
//       // {  
//       //   //    $error = "<label class='text-danger'>Enter Gender</label>";  
//       // }  
//       else if(empty($_POST["designation"]))  
//       {  
//         //    $error = "<label class='text-danger'>Enter Designation</label>";  
//       }  
//       else  
//       {  
           if(file_exists('currency.json'))  
           {  
            $jsonString = file_get_contents("php://input");

            date_default_timezone_set("Europe/Skopje");
            $todayDate= date("d.m.Y");
         
            // $data = json_decode($jsonString, true);
            $data = json_decode($jsonString);
            // $n[]=$data;
            $eur=array(
                  'currency' => 'EUR',
                  'buy' => (int)$data->eurBuy,
                  'sell' => (int)$data->eurSell,
                  'flag' => "flag--europe"
            );

            $aud=array(
                  'currency' => 'AUD',
                  'buy' => (int)$data->audBuy,
                  'sell' => (int)$data->audSell,
                  'flag' => "flag--australia"
                  );
            $cad=array(
                  'currency' => 'CAD',
                  'buy' => (int)$data->cadBuy,
                  'sell' => (int)$data->cadSell,
                  'flag' => "flag--canada" 
                  );
            $dkk=array(
                  'currency' => 'DKK',
                  'buy' => (int)$data->dkkBuy,
                  'sell' => (int)$data->dkkSell,
                  'flag' => "flag--denmark"  
                  );
            $jpy=array(
                  'currency' => 'JPY',
                  'buy' => (int)$data->jpyBuy,
                  'sell' => (int)$data->jpySell,
                  'flag' => "flag--japan"
                  );
            $nok=array(
                  'currency' => 'NOK',
                  'buy' => (int)$data->nokBuy,
                  'sell' => (int)$data->nokSell,
                  'flag' => "flag--norway"
                  );
            $sek=array(
                  'currency' => 'SEK',
                  'buy' => (int)$data->sekBuy,
                  'sell' => (int)$data->sekSell,
                  'flag' => "flag--sweden"
                  );
            $chf=array(
                  'currency' => 'CHF',
                  'buy' => (int)$data->chfBuy,
                  'sell' => (int)$data->chfSell,
                  'flag' => "flag--switzerland"
                  );
            $gbp=array(
                  'currency' => 'GBP',
                  'buy' => (int)$data->gbpBuy,
                  'sell' => (int)$data->gbpSell,
                  'flag' => "flag--uk"
                  );
            $usd=array(
                  'currency' => 'USD',
                  'buy' => (int)$data->usdBuy,
                  'sell' => (int)$data->usdSell,
                  'flag' => "flag--usa"
                  );


            // $n[]=$data;
            $currencies=array($eur, $aud, $cad, $dkk, $jpy, $nok, $sek, $chf, $gbp, $usd);

            $obj = array('datum' => $todayDate,'values' => $currencies);
            
            $newJsonString = json_encode($obj);
            file_put_contents('currency.json', $newJsonString);
            // unset($data);
      //       if(empty($errors))
      //       {         
      //       $postdata = file_get_contents("php://input");
      //       $request = json_decode($postdata);       
      //       $name = $request->name;
      //       $designation = $request->designation;

      //       $current_data = file_get_contents('currency.json');  
      //       $array_data = json_decode($current_data, true);  
      //       $extra = array(  
      //             'name'            =>     $name,  
              
      //             'designation'     =>     $designation  
      //       );  
      //       $array_data[] = $extra;  
      //       $final_data = json_encode($array_data);  
      //       if(file_put_contents('currency.json', $final_data))  
      //       {  
      //             $message = "<label class='text-success'>File Appended Success fully</p>";  
      //       }  
      //      }  
      //      else  
      //      {  
      //           $error = 'JSON File not exits';  
      //      }  
//       }  
 }  
 ?>  