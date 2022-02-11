# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class SyFunctiontab(models.Model):
    sy_fct_sn = models.AutoField(db_column='SY_FCT_SN', primary_key=True)  # Field name made lowercase.
    sy_fct_nam = models.CharField(db_column='SY_FCT_NAM', max_length=50)  # Field name made lowercase.
    sy_fct_act_typ = models.CharField(db_column='SY_FCT_ACT_TYP', max_length=1)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'SY_FUNCTIONTAB'
