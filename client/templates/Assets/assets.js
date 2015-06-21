Template.assetsList.helpers({
posts: function() {
return Posts.find();
}
});

Template.assetsList.events({
	'submit form': function(e) {
		e.preventDefault();
		var finance = new Finance();
		var cash = $(e.target).find('[name=cash]').val();

		var result = finance.ROI(cash, 1000);

		$(e.target).find('[name=roi]').text(result);
	}
});