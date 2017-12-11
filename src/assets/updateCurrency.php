<?php  
 $message = '';  
 $errors = '';  
 header('Content-type: application/json');
 header('Cache-Control: no-cache, no-store, must-revalidate');
 header('Pragma: no-cache');
 header('Expires: 0');
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
                  'buy' => (double)$data->eurBuy,
                  'sell' => (double)$data->eurSell,
                  'flag' => "flag--europe"
            );

            $aud=array(
                  'currency' => 'AUD',
                  'buy' => (double)$data->audBuy,
                  'sell' => (double)$data->audSell,
                  'flag' => "flag--australia"
                  );
            $cad=array(
                  'currency' => 'CAD',
                  'buy' => (double)$data->cadBuy,
                  'sell' => (double)$data->cadSell,
                  'flag' => "flag--canada" 
                  );
            $dkk=array(
                  'currency' => 'DKK',
                  'buy' => (double)$data->dkkBuy,
                  'sell' => (double)$data->dkkSell,
                  'flag' => "flag--denmark"  
                  );
            $jpy=array(
                  'currency' => 'JPY',
                  'buy' => (double)$data->jpyBuy,
                  'sell' => (double)$data->jpySell,
                  'flag' => "flag--japan"
                  );
            $nok=array(
                  'currency' => 'NOK',
                  'buy' => (double)$data->nokBuy,
                  'sell' => (double)$data->nokSell,
                  'flag' => "flag--norway"
                  );
            $sek=array(
                  'currency' => 'SEK',
                  'buy' => (double)$data->sekBuy,
                  'sell' => (double)$data->sekSell,
                  'flag' => "flag--sweden"
                  );
            $chf=array(
                  'currency' => 'CHF',
                  'buy' => (double)$data->chfBuy,
                  'sell' => (double)$data->chfSell,
                  'flag' => "flag--switzerland"
                  );
            $gbp=array(
                  'currency' => 'GBP',
                  'buy' => (double)$data->gbpBuy,
                  'sell' => (double)$data->gbpSell,
                  'flag' => "flag--uk"
                  );
            $usd=array(
                  'currency' => 'USD',
                  'buy' => (double)$data->usdBuy,
                  'sell' => (double)$data->usdSell,
                  'flag' => "flag--usa"
                  );


            // $n[]=$data;
            $currencies=array($eur, $aud, $cad, $dkk, $jpy, $nok, $sek, $chf, $gbp, $usd);

            $obj = array('datum' => $todayDate,'values' => $currencies);
            
            $newJsonString = json_encode($obj);
            file_put_contents('currency.json', $newJsonString);
            unset($data);
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