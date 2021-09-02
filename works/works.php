<?php

    // const number = temps[1];


include '../data/data.php';
 $dataJson = getWorks();

//$data_object = JSON.stringfy($dataJson);
  $data_object = json_decode($dataJson, true);


$count = count($data_object);








	for($i = 0; $i < $count; $i++){
		$name_arr[$i] = $data_object[$i]["name"];
		$section_arr[$i] = $data_object[$i]["section"];
		$author_arr[$i] = $data_object[$i]["author"];
		$img_arr[$i] = $data_object[$i]["img"];
	}







 ?>

<script language="javascript">
// 구글 스프레드 시트를 이용한 이미지 임베딩 소스코드 
async function separateRowFromJson(){
	let temp = {};
   	var data_object = <?= $data_object ?>;
   
    var name_arr = [<?php echo '"'.implode('","', $name_arr).'"' ?>];
    var section_arr = [<?php echo '"'.implode('","', $section_arr).'"' ?>];
    var author_arr = [<?php echo '"'.implode('","', $author_arr).'"' ?>];
    var img_arr = [<?php echo '"'.implode('","', $img_arr).'"' ?>];

	const _DATA = [];
	
	
	for(let i=0; i< <?=$count?>; i++){
		

		_DATA[i]={};
		_DATA[i]['name'] = name_arr[i];


		
		 _DATA[i]['author'] = author_arr[i];
		 _DATA[i]['section'] =section_arr[i];
		 _DATA[i]['img'] =img_arr[i];
		
		 
		 
	}

	
	return _DATA;
}



</script>