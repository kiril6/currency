<?php  
//  $message = '';  
//  $errors = '';  
 header('Content-type: application/json');
 header('Cache-Control: no-cache, no-store, must-revalidate');
 header('Pragma: no-cache');
 header('Expires: 0');

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
                  'flag' => "flag--europe",
                  'checked' => $data->eurStatus
            );
            $aud=array(
                  'currency' => 'AUD',
                  'buy' => (double)$data->audBuy,
                  'sell' => (double)$data->audSell,
                  'flag' => "flag--australia",
                  'checked' => $data->audStatus
                  );
            $cad=array(
                  'currency' => 'CAD',
                  'buy' => (double)$data->cadBuy,
                  'sell' => (double)$data->cadSell,
                  'flag' => "flag--canada" ,
                  'checked' => $data->cadStatus
                  );
            $dkk=array(
                  'currency' => 'DKK',
                  'buy' => (double)$data->dkkBuy,
                  'sell' => (double)$data->dkkSell,
                  'flag' => "flag--denmark",
                  'checked' => $data->dkkStatus
                  );
            $jpy=array(
                  'currency' => 'JPY',
                  'buy' => (double)$data->jpyBuy,
                  'sell' => (double)$data->jpySell,
                  'flag' => "flag--japan",
                  'checked' => $data->jpyStatus
                  );
            $nok=array(
                  'currency' => 'NOK',
                  'buy' => (double)$data->nokBuy,
                  'sell' => (double)$data->nokSell,
                  'flag' => "flag--norway",
                  'checked' => $data->nokStatus
                  );
            $sek=array(
                  'currency' => 'SEK',
                  'buy' => (double)$data->sekBuy,
                  'sell' => (double)$data->sekSell,
                  'flag' => "flag--sweden",
                  'checked' => $data->sekStatus
                  );
            $chf=array(
                  'currency' => 'CHF',
                  'buy' => (double)$data->chfBuy,
                  'sell' => (double)$data->chfSell,
                  'flag' => "flag--switzerland",
                  'checked' => $data->chfStatus
                  );
            $gbp=array(
                  'currency' => 'GBP',
                  'buy' => (double)$data->gbpBuy,
                  'sell' => (double)$data->gbpSell,
                  'flag' => "flag--uk",
                  'checked' => $data->gbpStatus
                  );
            $usd=array(
                  'currency' => 'USD',
                  'buy' => (double)$data->usdBuy,
                  'sell' => (double)$data->usdSell,
                  'flag' => "flag--usa",
                  'checked' => $data->usdStatus
                  );
            $bgn=array(
                  'currency' => 'BGN',
                  'buy' => (double)$data->bgnBuy,
                  'sell' => (double)$data->bgnSell,
                  'flag' => "flag--bulgaria",
                  'checked' => $data->bgnStatus
                  );
            $czk=array(
                  'currency' => 'CZK',
                  'buy' => (double)$data->czkBuy,
                  'sell' => (double)$data->czkSell,
                  'flag' => "flag--czech",
                  'checked' => $data->czkStatus
                  );
            $huf=array(
                  'currency' => 'HUF',
                  'buy' => (double)$data->hufBuy,
                  'sell' => (double)$data->hufSell,
                  'flag' => "flag--hungary",
                  'checked' => $data->hufStatus
                  );
            $pln=array(
                  'currency' => 'PLN',
                  'buy' => (double)$data->plnBuy,
                  'sell' => (double)$data->plnSell,
                  'flag' => "flag--poland",
                  'checked' => $data->plnStatus
                  );
            $ron=array(
                  'currency' => 'RON',
                  'buy' => (double)$data->ronBuy,
                  'sell' => (double)$data->ronSell,
                  'flag' => "flag--romania",
                  'checked' => $data->ronStatus
                  );
            $hrk=array(
                  'currency' => 'HRK',
                  'buy' => (double)$data->hrkBuy,
                  'sell' => (double)$data->hrkSell,
                  'flag' => "flag--croatia",
                  'checked' => $data->hrkStatus
                  );
            $try=array(
                  'currency' => 'TRY',
                  'buy' => (double)$data->tryBuy,
                  'sell' => (double)$data->trySell,
                  'flag' => "flag--turkey",
                  'checked' => $data->tryStatus
                  );
            $rub=array(
                  'currency' => 'RUB',
                  'buy' => (double)$data->rubBuy,
                  'sell' => (double)$data->rubSell,
                  'flag' => "flag--russia",
                  'checked' => $data->rubStatus
                  );
            $brl=array(
                  'currency' => 'BRL',
                  'buy' => (double)$data->brlBuy,
                  'sell' => (double)$data->brlSell,
                  'flag' => "flag--brazil",
                  'checked' => $data->brlStatus
                  );
            $cny=array(
                  'currency' => 'CNY',
                  'buy' => (double)$data->cnyBuy,
                  'sell' => (double)$data->cnySell,
                  'flag' => "flag--china",
                  'checked' => $data->cnyStatus
                  );
            $HKD=array(
                  'currency' => 'HKD',
                  'buy' => (double)$data->hkdBuy,
                  'sell' => (double)$data->hkdSell,
                  'flag' => "flag--hongkong",
                  'checked' => $data->hkdStatus
                  );
            $idr=array(
                  'currency' => 'IDR',
                  'buy' => (double)$data->idrBuy,
                  'sell' => (double)$data->idrSell,
                  'flag' => "flag--indonesia",
                  'checked' => $data->idrStatus
                  );
            $ils=array(
                  'currency' => 'ILS',
                  'buy' => (double)$data->ilsBuy,
                  'sell' => (double)$data->ilsSell,
                  'flag' => "flag--israel",
                  'checked' => $data->ilsStatus
                  );
            $inr=array(
                  'currency' => 'INR',
                  'buy' => (double)$data->inrBuy,
                  'sell' => (double)$data->inrSell,
                  'flag' => "flag--india",
                  'checked' => $data->inrStatus
                  );
            $krw=array(
                  'currency' => 'KRW',
                  'buy' => (double)$data->krwBuy,
                  'sell' => (double)$data->krwSell,
                  'flag' => "flag--korea",
                  'checked' => $data->krwStatus
                  );
            $mxn=array(
                  'currency' => 'MXN',
                  'buy' => (double)$data->mxnBuy,
                  'sell' => (double)$data->mxnSell,
                  'flag' => "flag--mexico",
                  'checked' => $data->mxnStatus
                  );
            $myr=array(
                  'currency' => 'MYR',
                  'buy' => (double)$data->myrBuy,
                  'sell' => (double)$data->myrSell,
                  'flag' => "flag--malaysia",
                  'checked' => $data->myrStatus
                  );
            $nzd=array(
                  'currency' => 'NZD',
                  'buy' => (double)$data->nzdBuy,
                  'sell' => (double)$data->nzdSell,
                  'flag' => "flag--newzealand",
                  'checked' => $data->nzdStatus
                  );
            $php=array(
                  'currency' => 'PHP',
                  'buy' => (double)$data->phpBuy,
                  'sell' => (double)$data->phpSell,
                  'flag' => "flag--philippines",
                  'checked' => $data->phpStatus
                  );
            $sgd=array(
                  'currency' => 'SGD',
                  'buy' => (double)$data->sgdBuy,
                  'sell' => (double)$data->sgdSell,
                  'flag' => "flag--singapore",
                  'checked' => $data->sgdStatus
                  );
            $thb=array(
                  'currency' => 'THB',
                  'buy' => (double)$data->thbBuy,
                  'sell' => (double)$data->thbSell,
                  'flag' => "flag--thailand",
                  'checked' => $data->thbStatus
                  );
            $zar=array(
                  'currency' => 'ZAR',
                  'buy' => (double)$data->zarBuy,
                  'sell' => (double)$data->zarSell,
                  'flag' => "flag--safrica",
                  'checked' => $data->zarStatus
                  );
            // $n[]=$data;
            $currencies=array($eur, $aud, $cad, $dkk, $jpy, $nok, $sek, $chf, $gbp, $usd, $bgn, $czk, $huf, $pln, $ron, $hrk, $try, $rub, $brl, $cny, $hkd, $idr, $ils, $inr, $krw, $mxn, $myr, $nzd, $php, $sgd, $thb, $zar);

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