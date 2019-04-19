
/*
Directives allow you to extend HTML. There are many built in and youcan make
custom ones as well. Built in directives provide event handling, form
validation, templates and more.
*/
 
// Define the AngularJS Module
var app3 = angular.module('app3', []);
 
// Define the Controller and implement the Scope
app3.controller('courseList', function($scope) {
 
  $scope.courses = [
    {name: "Client Side Web Appl Devel", number: '255', program: 'CIS'},
    {name: "Intro to System Software", number: '333', program: 'CIS'},
    {name: "Database Management Systems", number: '386', program: 'CIS'},
    {name: "Financial Accounting", number: '213', program: 'ACCT'},
	{name: "Physiological Anatomy", number: '231', program: 'BIOL'},
	{name: "General Chemistry I Lecture", number: '111', program: 'CHEM'},
	{name: "Fundamentals of Communication", number: '105', program: 'COMM'},
	{name: "Microcomputer Software ", number: '160', program: 'CS'},
	{name: "International Law", number: '206', program: 'CJ'},
	{name: "Principles of Microeconomics", number: '222', program: 'ECON'}
  ];
 
});