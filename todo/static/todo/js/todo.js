
"use strict";

function validation(){

  // 新規追加のinput
  const add = document.getElementsByName('add');

  // カスタムエラーを出すため、無効化
  add[0].required = false;

  // 新規追加のフォーム
  const add_form = document.getElementsByName('add_form');

  // テーブル側のフォーム
  let table_form = '';
  table_form = document.getElementsByName('table_form');

  // タスクの数
  let task_count = '';
  task_count = document.querySelectorAll('.task').length;

  // 新規追加のsubmitを選択した時
  add_form[0].addEventListener('submit',function(e)
  {
    // タスク名が入力されていない場合のエラー
    if(add[0].value === ''){
      alert('タスク名をご記入ください');
      // イベント伝搬の停止
      e.stopPropagation();
      // イベントキャンセル
      e.preventDefault();
     return false;
     }

   // タスクが十一文字以上エラー
   if(add[0].value.length >10){
      alert('タスクの文字数は10文字以内に設定しています');
      // イベント伝搬の停止
      e.stopPropagation();
      // イベントキャンセル
      e.preventDefault();
     return false;
     }

    // タスクがすでに三つある場合
    if(task_count === 3){
      alert('タスク登録数を３個までに設定しています');
      // イベント伝搬の停止
      e.stopPropagation();
      // イベントキャンセル
      e.preventDefault();
     return false;
     }
  });

  //削除するボタンをクリックした時
  if(table_form[0]){
    table_form[0].addEventListener('submit',function(e)
    {
      let key = document.getElementsByName("key")[0].value;

    if(key.match(/delate/)){
        var result = window.confirm('削除してもよろしいですか？');
          if(result){
              return true;
          }
        }
        // イベント伝搬の停止
        e.stopPropagation();
        // イベントキャンセル
        e.preventDefault();

        return false;
    });
  }
}

validation();
