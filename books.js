var BookShelf = function($scope) {
  $scope.books = [];
  
  $scope.addBook = function(){
    $scope.books.push($scope.newBook);
    // the below line empties the object
    $scope.newBook = {};
  };

   $scope.remove = function(newBook){
    var index=$scope.books.indexOf(newBook)
      $scope.books.splice(index,1);      
  };

};